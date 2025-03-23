import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

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
    validateEmail(email);
    validatePassword(password);

    if (  !emailError && !passwordError && email && password) {
      axios.post('http://localhost:3001/login',{email,password})
      .then(res=>{
        console.log(res)
        if(res.data==="success"){
          navigate("/");
        }
        else if(res.data==="user not exist"){
          alert("user doesn't exists");
        }
        else if(res.data==="password incorrect"){
          alert("password incorrect!");
        }
      })
      .catch(err=>console.log(err));
      
    } else {
      alert("Fill all the details properly");
    }
  };

  const  fun =()=>{
    navigate("/SignupPage");
   }
  return (
    <>
      <img src="bgimage.jpg" alt="bg-image" className="bg-image" />
      <div className="login-wrapper">
        <form className="login-container" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-group">
            <label>Username or Email</label>
            <input
              type="text"
              required
              placeholder="Enter your useranme or email.."
              name="email"
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
              name="password"
              onChange={(e) => validatePassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <button className="btn" type="submit">Submit</button>
          <p className="ifalreadysignup">if not a customer? <span className="ifalreadylogin" onClick={()=>fun()}>Sign up</span></p>
        </form>
      </div>
    </>
  );
}

export default Login;
