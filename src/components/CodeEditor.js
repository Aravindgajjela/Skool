import React, { Component } from "react";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "print('Hello, world!')", // Default code
      output: "",
      suggestions: "", // Store code suggestions
    };
  }

  // Handle changes in the textarea (code input)
  handleChange = (event) => {
    const newCode = event.target.value;
    this.setState({ code: newCode }, () => {
      // Fetch code suggestions from the backend as the user types
      this.fetchSuggestions(newCode);
    });
  };

  // Fetch code suggestions from the backend (Gemini API)
  fetchSuggestions = async (code) => {
    try {
      const response = await fetch("http://localhost:5000/get-code-suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      this.setState({ suggestions: data.suggestions || "No suggestions available" });
    } catch (error) {
      console.error("Error fetching code suggestions:", error);
    }
  };

  // Function to send code for execution
  handleRun = async () => {
    const { code } = this.state;

    try {
      const response = await fetch("http://localhost:5000/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      this.setState({ output: data.result || "Error running code" });
    } catch (error) {
      console.error("Error executing code:", error);
      this.setState({ output: "Error executing code." });
    }
  };

  render() {
    const { code, output, suggestions } = this.state;

    return (
      <div style={styles.container}>
        <h2 style={styles.header}>✨ Fun Code Editor ✨</h2>
        <textarea
          rows="8"
          cols="50"
          value={code}
          onChange={this.handleChange}
          placeholder="Type your awesome Python code here!"
          style={styles.textarea}
        />
        <br />
        <button onClick={this.handleRun} style={styles.button}>🚀 Run Code</button>

        {/* Display code suggestions */}
        {suggestions && (
          <div style={styles.suggestionsContainer}>
            <h4 style={styles.suggestionsHeader}>💡 Code Suggestions:</h4>
            <pre style={styles.suggestionsBox}>{suggestions}</pre>
          </div>
        )}

        {/* Display output */}
        <div>
          <h3 style={styles.outputHeader}>🎉 Output:</h3>
          <div style={styles.outputBox}>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    );
  }
}

// Styles for a fun, kid-friendly design
const styles = {
  container: {
    margin: "0 auto",
    padding: "20px",
    maxWidth: "900px",
    backgroundColor: "#F8F0F0",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#FF5733",
    fontSize: "3rem",
    fontFamily: "'Comic Sans MS', cursive",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  textarea: {
    width: "100%",
    height: "200px",
    padding: "15px",
    fontSize: "18px",
    fontFamily: "'Courier New', monospace",
    backgroundColor: "#FFF0F5",
    color: "#2E4053",
    borderRadius: "15px",
    border: "2px solid #FF5733",
    boxSizing: "border-box",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    backgroundColor: "#FF5733",
    color: "#fff",
    border: "none",
    padding: "15px 25px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "20px",
    marginTop: "15px",
    width: "100%",
    transition: "0.3s",
  },
  suggestionsContainer: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#FFEB3B",
    borderRadius: "12px",
    border: "3px dashed #FF5733",
  },
  suggestionsHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#F44336",
  },
  suggestionsBox: {
    backgroundColor: "#FFFFE0",
    padding: "10px",
    fontFamily: "'Courier New', monospace",
    color: "#333",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    borderRadius: "8px",
    border: "2px solid #FF5733",
    fontSize: "16px",
  },
  outputHeader: {
    fontSize: "2rem",
    color: "#008080",
    fontWeight: "bold",
  },
  outputBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#E0F7FA",
    borderRadius: "15px",
    minHeight: "120px",
    border: "2px solid #00796B",
    fontFamily: "'Courier New', monospace",
    color: "#333",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
};

export default CodeEditor;
