import React, { useState } from 'react';
import './App.css';

function App() {
  // Using useState to manage the state of the message
  const [message, setMessage] = useState("Welcome to React!");

  // Function to toggle the message
  const toggleMessage = () => {
    if (message === "Welcome to React!") {
      setMessage("You've clicked the button!");
    } else {
      setMessage("Welcome to React!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={toggleMessage}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
