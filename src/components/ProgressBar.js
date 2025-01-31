import React, { Component } from "react";

class ProgressBar extends Component {
    render() {
        // Dummy progress data
        const progress = 75; // Example: 75% progress

        // Choose a motivational message based on progress
        let message = "Keep Going! 🚀";
        let iconClass = "fas fa-rocket";
        if (progress >= 80) {
            message = "You're a Star! 🌟";
            iconClass = "fas fa-star";
        } else if (progress >= 50) {
            message = "Great Job! 👍";
            iconClass = "fas fa-thumbs-up";
        } else {
            message = "Let's Learn More! 📖";
            iconClass = "fas fa-book";
        }

        return (
            <div style={styles.pageContainer}>  {/* Centering Container */}
                <div style={styles.container}>
                    <h2 style={styles.title}>Your Learning Progress</h2>
                    
                    {/* Progress Bar */}
                    <div style={styles.progressContainer}>
                        <div 
                            style={{
                                ...styles.progressBar,
                                width: `${progress}%`,
                                backgroundColor: progress >= 70 ? '#28a745' : progress >= 40 ? '#ffc107' : '#dc3545'
                            }}
                        >
                            {progress}%
                        </div>
                    </div>

                    {/* Motivational Message */}
                    <div style={styles.messageContainer}>
                        <i className={iconClass} style={styles.icon}></i>
                        <p style={styles.message}>{message}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// Styles
const styles = {
    pageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        backgroundColor: "#F5F5DC", // Light playful background
    },
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        width: "80%",
        maxWidth: "500px",
    },
    title: {
        fontSize: "26px",
        color: "#333",
        marginBottom: "10px",
    },
    progressContainer: {
        width: "100%",
        backgroundColor: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        height: "30px",
    },
    progressBar: {
        height: "100%",
        textAlign: "center",
        color: "white",
        lineHeight: "30px",
        fontWeight: "bold",
        transition: "width 0.5s ease-in-out",
    },
    messageContainer: {
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    message: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#007bff",
    },
    icon: {
        fontSize: "40px",
        color: "#ff5722",
        marginBottom: "5px"
    }
};

export default ProgressBar;
