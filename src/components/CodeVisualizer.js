import React, { Component } from "react";
import CodeEditor from "./CodeEditor"; // Import the CodeEditor component
import Visualization from "./Visualization"; // Import the Visualization component

class CodeVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "", // Store final output from code execution
      executionSteps: [], // Store step-by-step execution
    };
  }

  // Function to send the code to the backend for execution
  runCode = async (code) => {
    try {
      // Send code to backend to execute (you can replace this with your own API call)
      const response = await fetch("http://localhost:5000/run-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      });

      const data = await response.json();

      // Update the execution steps and output in the state
      this.setState({
        executionSteps: data.steps,
        output: data.result,
      });
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Interactive Code Visualization</h2>
        {/* Pass the runCode function to CodeEditor as a prop */}
        <CodeEditor onCodeSubmit={this.runCode} />

        {/* Pass the execution steps and output to Visualization */}
        <Visualization
          executionSteps={this.state.executionSteps}
          output={this.state.output}
        />
      </div>
    );
  }
}

export default CodeVisualizer;
