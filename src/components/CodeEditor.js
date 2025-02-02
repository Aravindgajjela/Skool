import React, { Component } from "react";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "print('Hello, world!')",
    };
  }

  handleChange = (event) => {
    this.setState({ code: event.target.value });
  };

  handleRun = () => {
    this.props.runCode(this.state.code);
  };

  render() {
    return (
      <div>
        <h2>Code Editor</h2>
        <textarea
          rows="8"
          cols="50"
          value={this.state.code}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleRun}>Run Code</button>
      </div>
    );
  }
}

export default CodeEditor;
