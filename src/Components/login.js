import React, { useState } from "react";
import { firbase } from "./firebase";
import { addDoc, collection } from "@firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
  };

  return (
    <div className="login-container">
      <form id="form" className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login-form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small>{usernameError}</small>
        </div>
        <div className="login-form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>{passwordError}</small>
        </div>
        <button type="submit">
          <a href="/deshboard" className="login-link">
            Login
          </a>
        </button>
      </form>
      <div className="login-options">
        <a href="/signup">Sign up</a>
        <span> | </span>
        <a href="/forgotpass">Forgot password?</a>
      </div>
    </div>
  );
}

export default LoginPage;