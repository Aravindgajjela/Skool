import React, { Component } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Import playful icon

class Homework extends Component {
    state = {
        code: {}, // Store the code for each question separately
        feedback: {},
        isCorrect: {},
    };

    // List of homework questions with simplified answers
    questions = [
        {
            id: 1,
            question: "Write a JavaScript function to calculate the square of a number:",
            correctAnswer: "let square = (x) => { return x * x; }"
        },
        {
            id: 2,
            question: "Write a JavaScript function to find the factorial of a number:",
            correctAnswer: "let factorial = (x) => { let result = 1; for(let i = 1; i <= x; i++) { result *= i; } return result; }"
        },
        {
            id: 3,
            question: "Write a JavaScript function to check if a number is prime:",
            correctAnswer: "let isPrime = (n) => { for(let i = 2; i < n; i++) { if(n % i === 0) return false; } return true; }"
        },
        {
            id: 4,
            question: "Write a JavaScript function to reverse a string:",
            correctAnswer: "let reverseString = (s) => { return s.split('').reverse().join(''); }"
        }
    ];

    handleChange = (id, code) => {
        this.setState(prevState => ({
            code: {
                ...prevState.code,
                [id]: code
            }
        }));
    };

    handleSubmit = (id, code, correctAnswer) => {
        let feedback = "";
        // Check if the submitted code matches the correct answer
        if (code.trim() === correctAnswer) {
            feedback = "Correct! Great job!";
            this.setState(prevState => ({
                isCorrect: {
                    ...prevState.isCorrect,
                    [id]: true
                }
            }));
        } else {
            feedback = "Incorrect. Try again!";
            this.setState(prevState => ({
                isCorrect: {
                    ...prevState.isCorrect,
                    [id]: false
                }
            }));
        }
        this.setState(prevState => ({
            feedback: {
                ...prevState.feedback,
                [id]: feedback
            }
        }));
    };

    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.header}>
                    <FaQuestionCircle style={styles.icon} /> Homework Assignment
                </h2>
                <div style={styles.questionsList}>
                    {this.questions.map((item) => (
                        <div key={item.id} style={styles.questionContainer}>
                            <div style={styles.question}>
                                <p>{item.question}</p>
                                <textarea
                                    value={this.state.code[item.id] || ""}
                                    onChange={(e) => this.handleChange(item.id, e.target.value)}
                                    placeholder="Write your code here..."
                                    style={styles.textarea}
                                />
                                <button
                                    onClick={() => this.handleSubmit(item.id, this.state.code[item.id], item.correctAnswer)}
                                    style={styles.button}
                                >
                                    Submit
                                </button>
                                {this.state.isCorrect[item.id] !== undefined && (
                                    <p style={this.state.isCorrect[item.id] ? styles.correct : styles.incorrect}>
                                        {this.state.feedback[item.id]}
                                    </p>
                                )}
                            </div>
                            <div style={styles.answerBox}>
                                <p style={styles.answerText}>{item.correctAnswer}</p>
                            </div>
                        </div>
                    ))}
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
        backgroundColor: "#f7f7f7",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center",
        marginTop: "100px", // This will move the content away from the navbar
    },
    header: {
        fontSize: "2.5rem",
        marginBottom: "20px",
        color: "#333",
    },
    icon: {
        color: "#ff6f61",
        marginRight: "10px",
    },
    questionsList: {
        width: "80%",
        maxWidth: "900px",
        margin: "20px 0",
    },
    questionContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "20px",
    },
    question: {
        width: "65%",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    answerBox: {
        width: "30%",
        backgroundColor: "#e0f7fa",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginLeft: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    answerText: {
        fontSize: "1rem",
        color: "#00796b",
        wordWrap: "break-word",
        textAlign: "left",
    },
    textarea: {
        width: "100%",
        height: "150px",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    button: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#ff6f61",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontSize: "1.2rem",
        cursor: "pointer",
    },
    correct: {
        color: "#28a745", // Green for correct
        fontSize: "1.1rem",
    },
    incorrect: {
        color: "#e74c3c", // Red for incorrect
        fontSize: "1.1rem",
    },
};

export default Homework;
