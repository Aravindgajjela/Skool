import React, { Component } from "react";
import { Link } from "react-router-dom";  // Import Link to enable routing
import CodeHero from "./CodeHero"; // Superhero AI Tutor Bot
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
                            {/* Links to the routes */}
                            <Link to="/quiz" className="card-link">
                                <div className="card">
                                    <h3>Quiz</h3>
                                    <p>Take fun quizzes to test your Python skills!</p>
                                </div>
                            </Link>

                            <Link to="/progressBar" className="card-link">
                                <div className="card">
                                    <h3>Progress</h3>
                                    <p>Track your progress as you learn!</p>
                                </div>
                            </Link>

                            <Link to="/homework" className="card-link">
                                <div className="card">
                                    <h3>Homework</h3>
                                    <p>Complete assignments and challenge yourself.</p>
                                </div>
                            </Link>

                            <Link to="/parent-dashboard" className="card-link">
                                <div className="card">
                                    <h3>Parent Dashboard</h3>
                                    <p>Let your parents track your learning journey!</p>
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
