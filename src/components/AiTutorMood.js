import React, { Component } from "react";

class AiTutorMood extends Component {
    state = {
        mood: "neutral"
    };

    componentDidUpdate(prevProps) {
        if (prevProps.score !== this.props.score) {
            if (this.props.score >= 8) {
                this.setState({ mood: "happy" });
            } else if (this.props.score < 4) {
                this.setState({ mood: "sad" });
            }
        }
    }

    render() {
        const { mood } = this.state;
        return (
            <div>
                <p>{mood === "happy" ? "You're doing awesome!" : mood === "sad" ? "Don't worry, keep trying!" : "Let's keep going!"}</p>
            </div>
        );
    }
}

export default AiTutorMood;

