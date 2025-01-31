import React, { Component } from "react";
import { FaTrophy, FaSmile } from "react-icons/fa"; // Playful icons

class ParentDashboard extends Component {
    state = {
        progress: 50, // Example value, use actual data
        completedLessons: 5, // Example value
        totalLessons: 10 // Example value
    };

    render() {
        const { progress, completedLessons, totalLessons } = this.state;

        // Motivation message based on progress
        let motivationMessage;
        if (progress === 100) {
            motivationMessage = "🎉 Amazing job! You've reached 100%! Keep it up!";
        } else if (progress >= 75) {
            motivationMessage = "👏 Great work! Almost there!";
        } else if (progress >= 50) {
            motivationMessage = "😊 You're doing well! Keep pushing!";
        } else {
            motivationMessage = "🚀 Keep going, you're making progress!";
        }

        return (
            <div style={styles.container}>
                <h2 style={styles.header}>
                    <FaTrophy style={styles.icon} /> Parent Dashboard
                </h2>
                <div style={styles.content}>
                    <p style={styles.progress}>
                        <FaSmile style={styles.icon} /> Progress: {progress}%
                    </p>
                    <p style={styles.lessons}>
                        Completed Lessons: {completedLessons} / {totalLessons}
                    </p>
                    <p style={styles.motivation}>{motivationMessage}</p>
                </div>
            </div>
        );
    }
}

// Inline styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f8ff", // Soft light background color
        fontFamily: "'Poppins', sans-serif", // Stylish font
        textAlign: "center",
        color: "#333",
    },
    header: {
        fontSize: "2.5rem",
        marginBottom: "20px",
        color: "#ff6f61", // Playful color for the header
    },
    icon: {
        marginRight: "10px",
        color: "#ff6f61", // Matching icon color with header
    },
    content: {
        width: "80%",
        maxWidth: "700px",
        margin: "20px 0",
    },
    progress: {
        fontSize: "1.5rem",
        color: "#4caf50", // Green color for progress
        fontWeight: "bold",
    },
    lessons: {
        fontSize: "1.2rem",
        color: "#333",
        marginTop: "10px",
    },
    motivation: {
        marginTop: "20px",
        fontSize: "1.3rem",
        fontWeight: "500",
        color: "#2196f3", // Blue color for motivation text
    },
};

export default ParentDashboard;
