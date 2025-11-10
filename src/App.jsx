import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import BookApp from "./components/BookApp";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
return (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>
);

}

export default App;