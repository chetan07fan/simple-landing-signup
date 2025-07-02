import React, { useState } from "react";
import "./Form.css";
import DynamicForm from "./DynamicForm";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission
    const formData = {
      email,
      password,
      action: isSignIn ? "sign-in" : "log-in",
    };

    // Call your backend API here with formData

    console.log(formData); // For debugging purposes

    // Reset form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2>{isSignIn ? "Sign In" : "Log In"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignIn ? "Sign In" : "Log In"}</button>
        <button type="button" onClick={() => setIsSignIn(!isSignIn)}>
          Switch to {isSignIn ? "Log In" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
