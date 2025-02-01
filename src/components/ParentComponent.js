import React, { Component } from "react";
import CodeEditor from "./CodeEditor"; // Adjust the path if needed

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "", // To store the result after running the code
    };
  }

  // Function that will be called when the "Run Code" button is clicked
  handleCodeSubmit = (code) => {
    console.log("Submitted Code:", code);
    
    // Add a simple response for now, like running the code
    // You can add further code execution logic here if needed.
    
    // For demonstration, let's just set a response based on the code.
    if (code.trim() === 'print("hello, world")') {
      this.setState({ result: "Code Executed: hello, world" });
    } else {
      this.setState({ result: "Code execution error or unrecognized code" });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>AI-Powered Python Tutor</h1>
        <CodeEditor onCodeSubmit={this.handleCodeSubmit} />
        <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {this.state.result && <p>{this.state.result}</p>}
        </div>
      </div>
    );
  }
}

export default ParentComponent;
