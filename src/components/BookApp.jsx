// src/BookApp.jsx
import React from "react";

const books = [
  {
    id: 1,
    title: "Math",
    price: 400,
    image: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
  },
  {
    id: 2,
    title: "Physics",
    price: 700,
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103457.png",
  },
  {
    id: 3,
    title: "Chemistry",
    price: 800,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081871.png",
  },
  {
    id: 4,
    title: "Computer",
    price: 1000,
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721285.png",
  },
];

export default function BookApp() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Book App</h1>
      <div style={styles.cardContainer}>
        {books.map((book) => (
          <div key={book.id} style={styles.card}>
            <img src={book.image} alt={book.title} style={styles.image} />
            <h3>Title: {book.title}</h3>
            <p>Price: ₹{book.price}</p>
            <div style={styles.buttonContainer}>
              <button style={styles.button}>+</button>
              <button style={styles.button}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#a0522d",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#8b4513",
    borderRadius: "12px",
    padding: "15px",
    width: "180px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  buttonContainer: {
    marginTop: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "#8b4513",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    cursor: "pointer",
  },
};