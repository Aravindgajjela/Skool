import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link to enable routing
import { FaPython } from "react-icons/fa"; // Python icon

class Navbar extends Component {
  state = {
    isLoggedIn: false, // Track login status
  };

  toggleLogin = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  render() {
    return (
      <nav style={styles.navbar}>
        <div style={styles.leftSection}>
          <Link to="/" style={styles.navItem}>
            <FaPython style={styles.pythonLogo} />
            {/* Python logo on the left */}
          </Link>
        </div>

        <ul style={styles.navList}>
          <li>
            <Link to="/" style={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/chat" style={styles.navItem}>
              Chat
            </Link>
          </li>
          <li>
            <Link to="/settings" style={styles.navItem}>
              Settings
            </Link>
          </li>
        </ul>

        <div style={styles.rightSection}>
          <button onClick={this.toggleLogin} style={styles.loginButton}>
            {this.state.isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    );
  }
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#FFB6C1", 
    padding: "20px",
    height: "10px", 
    color: "#fff",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", 
    borderRadius: "0 0 20px 20px", 
    fontFamily: "'Comic Sans MS', cursive, sans-serif", 
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  pythonLogo: {
    fontSize: "30px",
    color: "#306998", // Python logo color
    marginRight: "10px", 
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",  
    gap: "25px", 
  },
  navItem: {
    color: "#black", 
    textDecoration: "none",
    fontSize: "18px", 
    padding: "12px 30px", 
    borderRadius: "25px", 
    backgroundColor: "#FFD700", 
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", 
    transition: "transform 0.2s, background-color 0.3s ease", 
    display: "flex",
    alignItems: "center",     
    fontWeight: "bold",        
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 25px",
    fontSize: "18px",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    fontWeight: "bold",
  },
};

export default Navbar;
