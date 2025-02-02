// File: src/App.js
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
import CodeEditor from "./components/CodeEditor";
import CodeVisualizer from "./components/CodeVisualizer";
import CodeVisualizerFlowchart from "./components/CodeVisualizerFlowchart";
import LiveCodingAssistant from "./components/LiveCodingAssistant";
import VoiceAssistant from "./components/VoiceAssistant"; // Import the new VoiceAssistant component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executionSteps: [],
      output: "",
    };
  }

  // This function will handle the code execution result from the backend
  handleCodeExecution = (data) => {
    this.setState({
      executionSteps: data.steps,
      output: data.result,
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

          {/* Routes for Code Editor, Visualizer, and Flowchart Visualizer */}
          <Route
            path="/code-editor"
            element={<CodeEditor onCodeExecution={this.handleCodeExecution} />}
          />
          <Route
            path="/code-visualizer"
            element={
              <CodeVisualizer
                executionSteps={this.state.executionSteps}
                output={this.state.output}
              />
            }
          />
          <Route
            path="/code-visualizer-flowchart"
            element={
              <CodeVisualizerFlowchart
                executionSteps={this.state.executionSteps}
                output={this.state.output}
              />
            }
          />
          {/* Route for Live Coding Assistant */}
          <Route path="/live-coding-assistant" element={<LiveCodingAssistant />} />
          {/* New Route for Voice Assistant */}
          <Route path="/voice-assistant" element={<VoiceAssistant />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
