import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import Link to enable routing

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li>
                        <Link to="/" style={styles.navItem}>
                            <i className="fas fa-home" style={styles.icon}></i> {/* Home icon */}
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat" style={styles.navItem}>
                            <i className="fas fa-comments" style={styles.icon}></i> {/* Chat icon */}
                            Chat
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" style={styles.navItem}>
                            <i className="fas fa-cogs" style={styles.icon}></i> {/* Settings icon */}
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

const styles = {
    navbar: {
        position: "fixed", // Fix the navbar at the top
        top: 0,            // Make sure it stays at the top of the page
        left: 0,           // Align to the left side
        width: "100%",     // Full width of the screen
        backgroundColor: "#FFB6C1", // Soft pink for a playful vibe
        padding: "20px",
        height: "20px",    // Set navbar height
        color: "#fff",     // White text
        zIndex: 1000,      // Ensure the navbar stays on top of other content
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Fun shadow for depth
        borderRadius: "0 0 20px 20px", // Rounded bottom corners
        fontFamily: "'Comic Sans MS', cursive, sans-serif", // Fun, child-friendly font
        display: "flex",   // Use flexbox to align items inside navbar
        alignItems: "center",  // Vertically center the items in the navbar
        justifyContent: "center", // Horizontally center the items
    },
    navList: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",  // Center the items horizontally
        alignItems: "center",      // Align items vertically
        gap: "25px",               // Space between the items
    },
    navItem: {
        color: "#black",            // White text
        textDecoration: "none",   // Remove underline
        fontSize: "18px",         // Slightly bigger text for better visibility
        padding: "12px 30px",     // Large padding for bigger clickable areas
        borderRadius: "25px",     // Rounded corners for buttons
        backgroundColor: "#FFD700", // Bright yellow button background
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Fun shadow
        transition: "transform 0.2s, background-color 0.3s ease", // Smooth transition for hover effects
        display: "flex",
        alignItems: "center",     // Center align the text and icon
        fontWeight: "bold",        // Bold for a fun, stronger text
    },
    icon: {
        marginRight: "10px",        // Space between the icon and the text
        fontSize: "22px",           // Make the icons a little bigger
    },
    navItemHover: {
        transform: "scale(1.1)",   // Zoom effect on hover
        backgroundColor: "#FF6347", // Tomato red when hovered for extra excitement
    }
};

export default Navbar;
