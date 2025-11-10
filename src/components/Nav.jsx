import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#8B4513",
      padding: "15px",
      gap: "30px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/book">Books</Link>
      <Link style={styles.link} to="/login">Login</Link>
      <Link style={styles.link} to="/signup">Signup</Link>
    </nav>
  );
}