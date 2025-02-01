import React, { Component } from "react";

class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executionSteps: [], // Store the execution steps to be displayed
      output: "", // Store the final output of the code
    };
  }

  // Update the execution steps and output
  updateExecutionSteps = (steps, output) => {
    this.setState({ executionSteps: steps, output: output });
  };

  render() {
    return (
      <div>
        <h3>Execution Steps:</h3>
        <div>
          {this.state.executionSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
        <h3>Output:</h3>
        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default Visualization;
