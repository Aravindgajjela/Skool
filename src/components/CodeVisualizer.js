import React, { Component } from "react";
import "prismjs/themes/prism-tomorrow.css"; // For syntax highlighting
import Prism from "prismjs"; // For syntax highlighting
import { FaSpinner } from "react-icons/fa"; // Loading spinner icon

class CodeVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "print('Hello, world!')", // Default code
      executionSteps: [], // Steps for code execution
      output: "", // Code output
      isExecuting: false, // Flag to show if code is being executed
      theme: "light", // Theme for dark/light mode
      errorMessage: "", // Store error message if any
    };
  }

  // Handle input changes in the code editor
  handleChange = (event) => {
    this.setState({ code: event.target.value }, () => {
      // Re-apply syntax highlighting when code changes
      Prism.highlightAll();
    });
  };

  // Call the backend to execute the code
  runCode = async () => {
    this.setState({ isExecuting: true, errorMessage: "" }); // Start loading

    try {
      const response = await fetch("http://localhost:5000/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: this.state.code }), // Sending the written code
      });

      const data = await response.json();

      if (response.ok) {
        this.setState({
          executionSteps: data.steps,
          output: data.result,
          isExecuting: false, // Stop loading
        });
      } else {
        this.setState({
          executionSteps: [],
          output: "Error executing code!",
          errorMessage: "There was an issue with the code execution.",
          isExecuting: false,
        });
      }
    } catch (error) {
      console.error("Error executing code:", error);
      this.setState({
        executionSteps: [],
        output: "Error executing code.",
        errorMessage: "Failed to communicate with the server.",
        isExecuting: false,
      });
    }
  };

  // Toggle between dark and light theme
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    const { executionSteps, output, isExecuting, theme, errorMessage } = this.state;

    return (
      <div style={theme === "light" ? styles.lightContainer : styles.darkContainer}>
        <div style={styles.header}>
          <h2 style={theme === "light" ? styles.lightHeading : styles.darkHeading}>Code Visualizer</h2>
          <button onClick={this.toggleTheme} style={styles.themeToggle}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <div style={styles.editorContainer}>
          <textarea
            rows="10"
            cols="50"
            value={this.state.code}
            onChange={this.handleChange}
            placeholder="Write your Python code here..."
            style={theme === "light" ? styles.lightTextarea : styles.darkTextarea}
          />
        </div>

        <button onClick={this.runCode} style={styles.runButton} disabled={isExecuting}>
          {isExecuting ? <FaSpinner className="fa-spin" /> : "Run Code"}
        </button>

        <div style={styles.executionStepsContainer}>
          <h3 style={theme === "light" ? styles.lightSubHeading : styles.darkSubHeading}>Execution Steps:</h3>
          {executionSteps.length > 0 ? (
            <div style={styles.progressContainer}>
              {executionSteps.map((step, index) => (
                <div key={index} style={styles.stepItem}>
                  {step}
                </div>
              ))}
            </div>
          ) : (
            <p style={theme === "light" ? styles.lightText : styles.darkText}>No execution steps available</p>
          )}
        </div>

        {errorMessage && (
          <div style={styles.errorContainer}>
            <span style={styles.errorMessage}>{errorMessage}</span>
          </div>
        )}

        <div style={styles.outputContainer}>
          <h3 style={theme === "light" ? styles.lightSubHeading : styles.darkSubHeading}>Output:</h3>
          <div style={theme === "light" ? styles.lightOutputBox : styles.darkOutputBox}>
            <pre>{output || "Waiting for output..."}</pre>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  // Light Theme
  lightContainer: {
    padding: "30px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  lightHeading: {
    textAlign: "center",
    color: "#3498db",
    fontSize: "36px",
    marginBottom: "20px",
  },
  lightSubHeading: {
    color: "#2980b9",
    fontSize: "20px",
    marginBottom: "10px",
  },
  lightTextarea: {
    width: "100%",
    height: "250px",
    padding: "15px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Courier New, monospace",
    resize: "none",
    backgroundColor: "#fafafa",
  },
  lightText: {
    color: "#555",
  },
  lightOutputBox: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontFamily: "'Courier New', monospace",
    fontSize: "16px",
    minHeight: "120px",
  },

  // Dark Theme
  darkContainer: {
    padding: "30px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#2c3e50",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#ecf0f1",
  },
  darkHeading: {
    textAlign: "center",
    color: "#1abc9c",
    fontSize: "36px",
    marginBottom: "20px",
  },
  darkSubHeading: {
    color: "#16a085",
    fontSize: "20px",
    marginBottom: "10px",
  },
  darkTextarea: {
    width: "100%",
    height: "250px",
    padding: "15px",
    fontSize: "16px",
    border: "1px solid #7f8c8d",
    borderRadius: "8px",
    fontFamily: "Courier New, monospace",
    resize: "none",
    backgroundColor: "#34495e",
    color: "#ecf0f1",
  },
  darkText: {
    color: "#bdc3c7",
  },
  darkOutputBox: {
    padding: "15px",
    backgroundColor: "#34495e",
    borderRadius: "8px",
    border: "1px solid #7f8c8d",
    fontFamily: "'Courier New', monospace",
    fontSize: "16px",
    minHeight: "120px",
    color: "#ecf0f1",
  },

  // Buttons and Controls
  themeToggle: {
    background: "none",
    color: "#fff",
    border: "1px solid #3498db",
    padding: "10px 15px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  runButton: {
    display: "block",
    width: "150px",
    margin: "20px auto",
    padding: "15px",
    backgroundColor: "#3498db",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  // Execution Steps
  progressContainer: {
    background: "rgba(52, 152, 219, 0.1)",
    borderRadius: "5px",
    padding: "10px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  stepItem: {
    background: "#3498db",
    color: "#fff",
    margin: "5px 0",
    padding: "8px",
    borderRadius: "5px",
    fontSize: "16px",
  },

  // Error Handling
  errorContainer: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "15px",
    textAlign: "center",
  },
  errorMessage: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default CodeVisualizer;
