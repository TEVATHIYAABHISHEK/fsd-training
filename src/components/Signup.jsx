import React from "react";

export default function Signup() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Signup Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Signup</button>
      </form>
    </div>
  );
}