// App.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Quiz from "./components/Quiz";
import ProgressBar from "./components/ProgressBar";
import Homework from "./components/Homework";
import ParentDashboard from "./components/ParentDashboard";
import Chat from "./components/Chat";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor"; // Import CodeEditor component
import CodeVisualizer from "./components/CodeVisualizer"; // Import CodeVisualizer component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executionSteps: [], // To store the execution steps
      output: "",         // To store the output result
    };
  }

  // This function will handle the code execution result from the backend
  handleCodeExecution = (data) => {
    // Update the state with execution steps and output after receiving response
    this.setState({
      executionSteps: data.steps, // Set the execution steps
      output: data.result,        // Set the output result from server
    });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/progressBar" element={<ProgressBar />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />

          {/* New Routes for Code Editor and Code Visualizer */}
          <Route
            path="/code-editor"
            element={<CodeEditor onCodeExecution={this.handleCodeExecution} />}
          />
          <Route
            path="/code-visualizer"
            element={<CodeVisualizer executionSteps={this.state.executionSteps} output={this.state.output} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
