import React, { Component } from "react";
import { FaKey } from "react-icons/fa"; // Fun icon for the key

class Settings extends Component {
  state = { apiKey: localStorage.getItem("GEMINI_API_KEY") || "" };

  handleChange = (event) => {
    this.setState({ apiKey: event.target.value });
  };

  handleSave = () => {
    localStorage.setItem("GEMINI_API_KEY", this.state.apiKey);
    alert("🎉 Your Gemini API Key was saved successfully!");
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#FFFAF0', // Light yellow background
        fontFamily: "'Comic Sans MS', cursive, sans-serif", // Fun font
        marginTop: '50px', // Added margin to push content down from the navbar
      },
      settingsBox: {
        padding: '30px',
        borderRadius: '20px',
        backgroundColor: '#FFEB3B', // Yellow background for the settings box
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '320px',
        border: '5px solid #FF9800', // Orange border for a friendly look
      },
      title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#FF5722', // Bright color for the title
        marginBottom: '15px',
      },
      subtitle: {
        fontSize: '16px',
        color: '#8B4513', // A soft brown color for the subtitle
        marginBottom: '25px',
      },
      input: {
        width: '100%',
        padding: '12px',
        marginBottom: '20px',
        border: '2px solid #FF9800', // Orange border for the input box
        borderRadius: '10px',
        fontSize: '18px',
        backgroundColor: '#FFF8DC', // Light cream color for the input
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      },
      saveButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 25px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s',
        fontWeight: 'bold',
      },
      saveButtonHover: {
        backgroundColor: '#45a049', // Slightly darker green when hovered
      },
      backButton: {
        backgroundColor: '#FF6347',
        color: 'white',
        padding: '12px 25px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        marginTop: '15px',
      },
      backButtonHover: {
        backgroundColor: '#e55347', // Slightly darker red for hover
      },
      link: {
        textDecoration: 'none',
        display: 'inline-block',
      },
      icon: {
        fontSize: '40px',
        color: '#FF5722', // Fun color for the key icon
        marginBottom: '10px',
      },
      alertText: {
        fontSize: '20px',
        color: '#FF5722',
        marginTop: '20px',
        fontWeight: 'bold',
      }
    };

    return (
      <div style={styles.container}>
        <div style={styles.settingsBox}>
          <FaKey style={styles.icon} />
          <h1 style={styles.title}>Settings </h1>
          <p style={styles.subtitle}>Enter your Gemini API key below:</p>
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
            style={styles.saveButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.saveButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.saveButton.backgroundColor}
          >
            Save API Key
          </button>
          <br />
          <a href="/" style={styles.link}>
            <button
              style={styles.backButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.backButtonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.backButton.backgroundColor}
            >
              Go Back to Home
            </button>
          </a>
          <p style={styles.alertText}>Don't forget to save your key!</p>
        </div>
      </div>
    );
  }
}

export default Settings;
