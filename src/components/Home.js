import React, { Component } from "react";
import { Link } from "react-router-dom";  // Import Link to enable routing
import CodeHero from "./HelpBot"; // Superhero AI Tutor Bot
import "./Home.css"; // Importing the external CSS file

class Home extends Component {
    state = {
        score: 0, // Example score for CodeHero
    };

    render() {
        return (
            <div className="home-container">
                <div className="main-content">
                    <div className="header">
                        <h1>Welcome to the AI-Powered Python Tutor!</h1>
                        <p className="subheading">
                            Let's start learning Python in a fun and engaging way with your Superhero, CodeHero!
                        </p>
                    </div>

                    <div className="feature-container">
                        <h2>Explore Features</h2>
                        <div className="feature-cards">
                            {/* Quiz card */}
                            <Link to="/quiz" className="card-link">
                                <div className="card">
                                    <h3>Quiz</h3>
                                    <p>Take fun quizzes to test your Python skills!</p>
                                    <i className="fas fa-question-circle"></i>
                                </div>
                            </Link>

                            {/* Code Visualizer card */}
                            <Link to="/code-visualizer" className="card-link">
                                <div className="card card-code-visualizer">
                                    <h3>Code Visualizer</h3>
                                    <p>Visualize your code execution step by step!</p>
                                    <i className="fas fa-eye"></i>
                                </div>
                            </Link>

                            {/* Homework card */}
                            <Link to="/homework" className="card-link">
                                <div className="card">
                                    <h3>Homework</h3>
                                    <p>Complete assignments and challenge yourself.</p>
                                    <i className="fas fa-book"></i>
                                </div>
                            </Link>

                            {/* Code Editor card */}
                            <Link to="/code-editor" className="card-link">
                                <div className="card card-code-editor">
                                    <h3>Code Editor</h3>
                                    <p>Write and test your Python code directly!</p>
                                    <i className="fas fa-code"></i>
                                </div>
                            </Link>

                            {/* Progress card */}
                            <Link to="/progressBar" className="card-link">
                                <div className="card">
                                    <h3>Progress</h3>
                                    <p>Track your progress as you learn!</p>
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </Link>

                            {/* Parent Dashboard card */}
                            <Link to="/parent-dashboard" className="card-link">
                                <div className="card">
                                    <h3>Parent Dashboard</h3>
                                    <p>Let your parents track your learning journey!</p>
                                    <i className="fas fa-users"></i>
                                </div>
                            </Link>

                            {/* Code Visualizer Flowchart card */}
                            <Link to="/code-visualizer-flowchart" className="card-link">
                                <div className="card card-code-visualizer-flowchart">
                                    <h3>Code Flowchart Visualizer</h3>
                                    <p>Generate a flowchart of your code to understand execution flow!</p>
                                    <i className="fas fa-project-diagram"></i>
                                </div>
                            </Link>

                            {/* Live Coding Assistant card */}
                            <Link to="/live-coding-assistant" className="card-link">
                                <div className="card card-live-coding">
                                    <h3>Live Coding Assistant</h3>
                                    <p>Write and execute code live in the browser!</p>
                                    <i className="fas fa-terminal"></i>
                                </div>
                            </Link>

                            {/* Voice Assistant card */}
                            <Link to="/voice-assistant" className="card-link">
                                <div className="card card-voice-assistant">
                                    <h3>Voice Assistant</h3>
                                    <p>Ask Python questions using your voice and get answers with code examples!</p>
                                    <i className="fas fa-microphone"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <CodeHero score={this.state.score} /> {/* Superhero AI Tutor Bot */}
            </div>
        );
    }
}

export default Home;
