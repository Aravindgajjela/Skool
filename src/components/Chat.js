import React, { Component } from "react";
import { FaRobot, FaRegSmile, FaDog, FaMask, FaAnchor, FaHorse } from "react-icons/fa"; 

class Chat extends Component {
    state = {
        message: "",
        response: "",
        tutorName: "CodeHero",
        character: "robot", // Default character
        avatar: <FaRobot />, // Default avatar
        backgroundColor: "#E0E0E0", // Default background
        textColor: "#333", // Default text color
    };

    // Handle character selection
    handleCharacterChange = (event) => {
        const selectedCharacter = event.target.value;
        let avatar, backgroundColor, textColor, tutorName;

        switch (selectedCharacter) {
            case "robot":
                avatar = <FaRobot />;
                backgroundColor = "#E0E0E0";
                textColor = "#333";
                tutorName = "CodeHero";
                break;
            case "dog":
                avatar = <FaDog />;
                backgroundColor = "#FFE4B5"; // Light golden background
                textColor = "#6A5ACD"; // Slate blue text
                tutorName = "PawSage";
                break;
            case "smiley":
                avatar = <FaRegSmile />;
                backgroundColor = "#FFEB3B"; // Bright yellow background
                textColor = "#FF6347"; // Tomato red text
                tutorName = "Smiley Tutor";
                break;
            case "superhero":
                avatar = <FaMask />; // Use FaMask as superhero
                backgroundColor = "#FFD700"; // Gold background
                textColor = "#DC143C"; // Crimson text
                tutorName = "HeroMind";
                break;
            case "pirate":
                avatar = <FaAnchor />; // Use FaAnchor for Pirate
                backgroundColor = "#D2691E"; // Chocolate brown background
                textColor = "#FFF"; // White text
                tutorName = "Captain Code";
                break;
            case "unicorn":
                avatar = <FaHorse />; // Use FaHorse for Unicorn
                backgroundColor = "#FFB6C1"; // Light pink background
                textColor = "#8A2BE2"; // Blueviolet text
                tutorName = "UniCode";
                break;
            default:
                avatar = <FaRobot />;
                backgroundColor = "#E0E0E0";
                textColor = "#333";
                tutorName = "CodeHero";
        }

        this.setState({
            character: selectedCharacter,
            avatar: avatar,
            backgroundColor: backgroundColor,
            textColor: textColor,
            tutorName: tutorName,
        });
    };

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    };

    handleSend = () => {
        // You can get the API key from localStorage or your backend securely
        const apiKey = localStorage.getItem('apiKey'); // Assuming you saved your key here

        fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`, // Use the API key here
            },
            body: JSON.stringify({ message: this.state.message }),
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ response: data.choices[0]?.message?.content || "No response" });
            })
            .catch(() => {
                this.setState({ response: "Error: Could not get a response from the AI." });
            });
    };

    render() {
        const { avatar, tutorName, message, response, backgroundColor, textColor } = this.state;

        return (
            <div style={{ ...styles.container, backgroundColor: backgroundColor }}>
                <div style={styles.chatBox}>
                    <h1 style={{ ...styles.title, color: textColor }}>
                        {avatar} {tutorName}
                    </h1>
                    <p style={styles.subtitle}>Your fun AI tutor is here to help!</p>
                    <select onChange={this.handleCharacterChange} style={styles.select}>
                        <option value="robot">Robot Tutor</option>
                        <option value="dog">Dog Tutor</option>
                        <option value="smiley">Smiley Tutor</option>
                        <option value="superhero">Superhero Tutor</option>
                        <option value="pirate">Pirate Tutor</option>
                        <option value="unicorn">Unicorn Tutor</option>
                    </select>
                    <textarea
                        value={message}
                        onChange={this.handleChange}
                        rows="6"
                        cols="50"
                        placeholder="Ask me anything about Python..."
                        style={styles.textarea}
                    />
                    <br />
                    <button onClick={this.handleSend} style={{ ...styles.button, backgroundColor: textColor }}>
                        Send Your Question
                    </button>
                    <div style={styles.responseBox}>
                        <p><b>{tutorName}'s Response:</b></p>
                        <p>{response}</p>
                    </div>
                    <a href="/" style={styles.link}>
                        <button style={styles.backButton}>Go Back to Home</button>
                    </a>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#F0F8FF", // Light sky blue background
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
    },
    chatBox: {
        backgroundColor: "#FFF8DC", // Light cream color
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        width: "80%",
        maxWidth: "600px",
        textAlign: "center",
    },
    title: {
        color: "#FF6347", // Tomato color for title
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    subtitle: {
        color: "#32CD32", // Lime green subtitle
        fontSize: "18px",
        fontWeight: "400",
        marginBottom: "20px",
    },
    textarea: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "10px",
        border: "2px solid #FF6347", // Tomato border
        marginBottom: "20px",
        boxSizing: "border-box", // Padding inside width
        resize: "none", // Disable resizing
    },
    button: {
        backgroundColor: "#FF6347", // Tomato red color
        color: "#fff",
        padding: "12px 30px",
        fontSize: "18px",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        fontWeight: "bold",
    },
    responseBox: {
        marginTop: "20px",
        backgroundColor: "#E6E6FA", // Lavender background for the response box
        padding: "15px",
        borderRadius: "10px",
        border: "2px solid #FF6347",
        textAlign: "left",
        color: "#333",
        fontSize: "16px",
    },
    backButton: {
        backgroundColor: "#32CD32", // Lime green button
        color: "#fff",
        padding: "12px 30px",
        fontSize: "18px",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        fontWeight: "bold",
    },
};

export default Chat;
