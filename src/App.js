import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz"; // Import the Quiz component
import ProgressBar from "./components/ProgressBar"; // Import the Progress component
import Homework from "./components/Homework"; // Import the Homework component
import ParentDashboard from "./components/ParentDashboard"; // Import Parent Dashboard component
import Chat from "./components/Chat"; // Import the Chat component
import Settings from "./components/Settings"; // Import the Settings component
import Navbar from "./components/Navbar"; // Import Navbar component

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/progressBar" element={<ProgressBar />} />
                    <Route path="/homework" element={<Homework />} />
                    <Route path="/parent-dashboard" element={<ParentDashboard />} />
                    <Route path="/chat" element={<Chat />} /> {/* Chat Route */}
                    <Route path="/settings" element={<Settings />} /> {/* Settings Route */}
                </Routes>
            </Router>
        );
    }
}

export default App;
