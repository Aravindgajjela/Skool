import React, { Component } from "react";
import { FaRobot, FaRegSmile, FaDog, FaMask, FaAnchor, FaHorse } from "react-icons/fa";

class Chat extends Component {
    state = {
        message: "",
        response: "",
        tutorName: "CodeHero",
        character: "robot",
        avatar: <FaRobot />,
        backgroundColor: "#E0E0E0",
        textColor: "#333",
        backgroundImage: "url('https://media.istockphoto.com/id/1192093167/vector/set-of-cute-robot-ai-character-meditation-and-confidence-action.jpg?s=612x612&w=0&k=20&c=cAqGTZlqyFeed-wgHM7lWmMqT_awyF192-5fjUTtRsE=')", // Default background for robot
    };

    handleCharacterChange = (event) => {
        const selectedCharacter = event.target.value;
        let avatar, backgroundColor, textColor, tutorName, backgroundImage;

        switch (selectedCharacter) {
            case "robot":
                avatar = <FaRobot />;
                backgroundColor = "#E0E0E0";
                textColor = "#333";
                tutorName = "CodeHero";
                backgroundImage = "url('https://media.istockphoto.com/id/1192093167/vector/set-of-cute-robot-ai-character-meditation-and-confidence-action.jpg?s=612x612&w=0&k=20&c=cAqGTZlqyFeed-wgHM7lWmMqT_awyF192-5fjUTtRsE=')";
                break;
            case "dog":
                avatar = <FaDog />;
                backgroundColor = "#FFE4B5";
                textColor = "#6A5ACD";
                tutorName = "PawSage";
                backgroundImage = "url('https://media.istockphoto.com/id/508231523/photo/dog-in-glasses-reads-the-red-book.jpg?s=612x612&w=0&k=20&c=0JOXKFkq3XkQWGFhy8y41k5y3IiDntoSJ_j5KPeITRM=')";
                break;
            case "smiley":
                avatar = <FaRegSmile />;
                backgroundColor = "#FFEB3B";
                textColor = "#FF6347";
                tutorName = "Smiley Tutor";
                backgroundImage = "url('https://media.istockphoto.com/id/1207566766/photo/3d-emoji-with-smiley-face.jpg?s=612x612&w=0&k=20&c=Kan4w6aLcZqCuS7Ir49ag1sNdAAvDofierJ1qpO0YXc=')";
                break;
            case "superhero":
                avatar = <FaMask />;
                backgroundColor = "#FFD700";
                textColor = "#DC143C";
                tutorName = "HeroMind";
                backgroundImage = "url('https://media.istockphoto.com/id/1192096415/vector/vector-retro-superhero-couple-silhouette-with-city-skyline.jpg?s=612x612&w=0&k=20&c=ilZ4DPrdKcKFKgYRuzXs6OcDPFgHngunhB8k9kylhJE=')";
                break;
            case "pirate":
                avatar = <FaAnchor />;
                backgroundColor = "#D2691E";
                textColor = "#FFF";
                tutorName = "Captain Code";
                backgroundImage = "url('https://media.istockphoto.com/id/522457566/photo/little-pirate-looking-with-spyglass.jpg?s=612x612&w=0&k=20&c=_Mt4s6eSgFR6ctWtMB0eUAUB94aYLCzeuUJpEm65koE=')";
                break;
            case "unicorn":
                avatar = <FaHorse />;
                backgroundColor = "#FFB6C1";
                textColor = "#8A2BE2";
                tutorName = "UniCode";
                backgroundImage = "url('https://media.istockphoto.com/id/178574231/photo/rare-earth.jpg?s=612x612&w=0&k=20&c=Z5bv07nq7GyG0ZIZFvm2myuvcFxnv4vUnU_xpAq3WVU=')";
                break;
            default:
                avatar = <FaRobot />;
                backgroundColor = "#E0E0E0";
                textColor = "#333";
                tutorName = "CodeHero";
                backgroundImage = "url('https://media.istockphoto.com/id/1192096415/vector/vector-retro-superhero-couple-silhouette-with-city-skyline.jpg?s=612x612&w=0&k=20&c=ilZ4DPrdKcKFKgYRuzXs6OcDPFgHngunhB8k9kylhJE=')";
        }

        this.setState({
            character: selectedCharacter,
            avatar,
            backgroundColor,
            textColor,
            tutorName,
            backgroundImage,
        });
    };

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    };

    handleSend = () => {
        const apiKey = localStorage.getItem("GEMINI_API_KEY");

        if (!apiKey) {
            alert("Please set your Gemini API key in Settings.");
            return;
        }

        fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: this.state.message }] }], 
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
                this.setState({ response: reply });
            })
            .catch(() => {
                this.setState({ response: "Error: Could not get a response from Gemini AI." });
            });
    };

    render() {
        const { avatar, tutorName, message, response, backgroundColor, textColor, backgroundImage } = this.state;

        return (
            <div style={{ ...styles.container, backgroundColor, backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={styles.chatBox}>
                    <h1 style={{ ...styles.title, color: textColor }}>
                        {avatar} {tutorName}
                    </h1>
                    <p style={styles.subtitle}>Your fun AI tutor is here to help!</p>
                    <div style={styles.selectContainer}>
                        <select
                            onChange={this.handleCharacterChange}
                            style={styles.select}
                            value={this.state.character}
                        >
                            <option value="robot" style={styles.option}>
                                <FaRobot style={styles.icon} /> Robot Tutor
                            </option>
                            <option value="dog" style={styles.option}>
                                <FaDog style={styles.icon} /> Dog Tutor
                            </option>
                            <option value="smiley" style={styles.option}>
                                <FaRegSmile style={styles.icon} /> Smiley Tutor
                            </option>
                            <option value="superhero" style={styles.option}>
                                <FaMask style={styles.icon} /> Superhero Tutor
                            </option>
                            <option value="pirate" style={styles.option}>
                                <FaAnchor style={styles.icon} /> Pirate Tutor
                            </option>
                            <option value="unicorn" style={styles.option}>
                                <FaHorse style={styles.icon} /> Unicorn Tutor
                            </option>
                        </select>
                    </div>
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
                        🚀 Send Your Question!
                    </button>
                    <div style={styles.responseBox}>
                        <p><b>{tutorName}'s Response:</b></p>
                        <p>{response}</p>
                    </div>
                    <a href="/" style={styles.link}>
                        <button style={styles.backButton}>Back to Home</button>
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
        backgroundColor: "#F0F8FF",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        transition: 'background 0.5s ease', // Smooth background transition
    },
    chatBox: {
        backgroundColor: "#FFF8DC",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        width: "80%",
        maxWidth: "600px",
        textAlign: "center",
        opacity: 0.9,
    },
    title: {
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "18px",
        fontWeight: "400",
        marginBottom: "20px",
    },
    selectContainer: {
        marginBottom: "20px",
        textAlign: "left",
    },
    select: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "12px",
        border: "2px solid #FF6347",
        backgroundColor: "#FFF8DC",
        fontWeight: "bold",
        cursor: "pointer",
        appearance: "none", 
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/8d/Font_Awesome_5_solid_chevron-down.svg')", // Custom arrow icon
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
    },
    option: {
        display: "flex",
        alignItems: "center",
        padding: "8px",
    },
    icon: {
        marginRight: "10px",
        fontSize: "20px",
    },
    textarea: {
        width: "100%",
        padding: "12px",
        fontSize: "18px",
        borderRadius: "12px",
        border: "2px solid #FF6347",
        marginBottom: "20px",
        boxSizing: "border-box",
        resize: "none",
    },
    button: {
        color: "#fff",
        padding: "12px 30px",
        fontSize: "20px",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    responseBox: {
        marginTop: "20px",
        backgroundColor: "#E6E6FA",
        padding: "15px",
        borderRadius: "10px",
        border: "2px solid #FF6347",
        textAlign: "left",
        fontSize: "18px",
    },
    link: {
        textDecoration: "none",
    },
    backButton: {
        padding: "10px 20px",
        backgroundColor: "#8A2BE2",
        color: "#fff",
        fontSize: "18px",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
    },
};

export default Chat;
