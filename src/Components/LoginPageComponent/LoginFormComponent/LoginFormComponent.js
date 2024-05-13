// src/components/LoginPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginFormComponent.css";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN_SUCCESS" });
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <h5>Email</h5>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h5>Password</h5>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a className="forgot-password" href="/forgot-password">
          Forgot password?
        </a>
        <Link to="/" onClick={handleLogin}>
          <button type="submit"> Sign In</button>
        </Link>
        <div className="link">
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComponent;
