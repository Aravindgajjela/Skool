import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPython, FaHome, FaComments, FaCog } from "react-icons/fa";

class Navbar extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <nav style={styles.navbar}>
        <div style={styles.leftSection}>
          <Link to="/" style={styles.brand}>
            <FaPython style={styles.logo} />
            <span style={styles.brandName}>CodeSpark AI</span>
          </Link>
        </div>

        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navItem}><FaHome style={styles.icon} /> Home</Link></li>
          <li><Link to="/chat" style={styles.navItem}><FaComments style={styles.icon} /> Chat</Link></li>
          <li><Link to="/settings" style={styles.navItem}><FaCog style={styles.icon} /> Settings</Link></li>
        </ul>

      </nav>
    );
  }
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "10px", // Adjusted for better height
    width: "100%",
    backgroundColor: "#2C3E50",
    padding: "15px 30px",
    color: "#ECF0F1",
    display: "flex",
    justifyContent: "space-between", // Space out the left and right sections
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    fontFamily: "Arial, sans-serif",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    flex: 1, // Makes the left section take up available space
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#ECF0F1",
    fontSize: "22px",
    fontWeight: "bold",
  },
  logo: {
    fontSize: "28px",
    color: "#F4C542",
    marginRight: "10px",
  },
  brandName: {
    fontSize: "20px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center", // Centers the nav items
    gap: "20px",
    margin: 0,
    padding: 0,
    flex: 1, // Allows the list to take up available space
  },
  navItem: {
    color: "#ECF0F1",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "18px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#3498DB",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Navbar;
