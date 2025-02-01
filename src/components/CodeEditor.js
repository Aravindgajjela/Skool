import React, { Component } from "react";
import AceEditor from "react-ace";
import "brace/mode/python";
import "brace/theme/github";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "", // Store the code written by the user
    };
  }

  // Update the code in state as the user types
  handleChange = (newCode) => {
    this.setState({ code: newCode });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px", margin: "0 auto" }}>
        <h2>Python Code Editor</h2>
        <AceEditor
          mode="python"
          theme="github"
          onChange={this.handleChange}
          value={this.state.code}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
          style={{ width: "100%", height: "300px" }}
        />
        <br />
        <button
          onClick={() => {
            if (this.props.onCodeSubmit) {
              this.props.onCodeSubmit(this.state.code); // Call onCodeSubmit prop
            }
          }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Run Code
        </button>
      </div>
    );
  }
}

export default CodeEditor;
