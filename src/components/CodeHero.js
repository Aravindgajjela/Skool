import React, { Component } from "react";

class CodeHero extends Component {
    render() {
        return (
            <div style={styles.heroBot} onClick={this.handleHeroClick}>
                <i className="fas fa-rocket" style={styles.icon}></i> {/* Superhero Rocket Icon */}
                <div style={styles.heroMessage}>
                    <p>Click me for help, I am CodeHero!</p>
                </div>
            </div>
        );
    }

    handleHeroClick = () => {
        alert("Hi, I am CodeHero! How can I help you with your Python journey?");
    };
}

const styles = {
    heroBot: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#ff6347", // Hero red color
        padding: "15px",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "transform 0.3s ease", // Animation effect
    },
    icon: {
        fontSize: "40px",
        color: "#fff",
    },
    heroMessage: {
        fontSize: "14px",
        color: "#fff",
        display: "none", // Hidden by default
    },
};

// Animation for floating hero bot
styles.heroBot[':hover'] = {
    transform: "scale(1.1)", // Slight zoom effect on hover
};

export default CodeHero;
