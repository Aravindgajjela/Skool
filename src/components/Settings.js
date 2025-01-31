import React, { Component } from "react";

class Settings extends Component {
  constructor() {
    super();
    this.state = { 
      apiKey: "",
      isSaveButtonHovered: false,
      isBackButtonHovered: false
    };
  }

  handleChange = (event) => {
    this.setState({ apiKey: event.target.value });
  };

  handleSave = () => {
    localStorage.setItem("OPENAI_API_KEY", this.state.apiKey);
    alert("Yay! API Key saved successfully!");
  };

  handleMouseEnterSaveButton = () => {
    this.setState({ isSaveButtonHovered: true });
  };

  handleMouseLeaveSaveButton = () => {
    this.setState({ isSaveButtonHovered: false });
  };

  handleMouseEnterBackButton = () => {
    this.setState({ isBackButtonHovered: true });
  };

  handleMouseLeaveBackButton = () => {
    this.setState({ isBackButtonHovered: false });
  };

  render() {
    const { isSaveButtonHovered, isBackButtonHovered } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.settingsBox}>
          <h1 style={styles.title}>Settings</h1>
          <p style={styles.subtitle}>Enter your OpenAI API key below to start using CodeHero!</p>
          <input
            type="text"
            value={this.state.apiKey}
            onChange={this.handleChange}
            placeholder="Enter API Key"
            style={styles.input}
          />
          <br />
          <button
            onClick={this.handleSave}
            style={isSaveButtonHovered ? { ...styles.saveButton, ...styles.saveButtonHover } : styles.saveButton}
            onMouseEnter={this.handleMouseEnterSaveButton}
            onMouseLeave={this.handleMouseLeaveSaveButton}
          >
            Save API Key
          </button>
          <br />
          <a href="/" style={styles.link}>
            <button
              style={isBackButtonHovered ? { ...styles.backButton, ...styles.backButtonHover } : styles.backButton}
              onMouseEnter={this.handleMouseEnterBackButton}
              onMouseLeave={this.handleMouseLeaveBackButton}
            >
              Go Back to Home
            </button>
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
    backgroundColor: "#FFEBEE", // Light pink background
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  settingsBox: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    color: "#FF5722", // Bright orange for the title
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#009688", // Teal color for the subtitle
    fontSize: "18px",
    fontWeight: "300",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "2px solid #FF5722", // Orange border
    marginBottom: "20px",
    boxSizing: "border-box", // Padding inside width
    resize: "none", // Disable resizing
  },
  saveButton: {
    backgroundColor: "#FF5722", // Bright orange for the button
    color: "#fff",
    padding: "12px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  saveButtonHover: {
    backgroundColor: "#E64A19", // Darker orange when hovered
  },
  backButton: {
    backgroundColor: "#009688", // Teal back button
    color: "#fff",
    padding: "12px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  backButtonHover: {
    backgroundColor: "#00796B", // Darker teal when hovered
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
  },
};

export default Settings;
