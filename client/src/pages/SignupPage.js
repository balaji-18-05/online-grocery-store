import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  // Validate name
  const validateName = (value) => {
    setName(value);
    setNameError(value.trim() ? "" : "Name cannot be empty");
  };

  // Validate email
  const validateEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(emailRegex.test(value) ? "" : "Invalid email format");
  };

  // Validate password
  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setPasswordError("Password must contain a special character");
    } else {
      setPasswordError("");
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password);

    if (!nameError && !emailError && !passwordError && name && email && password) {
      navigate("/Login");
    } else {
      alert("Fill all the details properly");
    }
  };


    const  fun =()=>{
    navigate("/Login");
   }
  return (
    <>
      <img src="bgimage.jpg" alt="bg-image" className="bg-image" />
      <div className="login-wrapper">
        <form className="login-container" onSubmit={handleSubmit}>
          <h1>Sign up</h1>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => validateName(e.target.value)}
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <button className="btn" type="submit">Submit</button>
          <p className="ifalreadysignup">if already? <span className="ifalreadylogin" onClick={()=>fun()}>login in</span></p>
        </form>
      </div>
    </>
  );
}

export default Login;
