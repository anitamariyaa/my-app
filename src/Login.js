import React, { useState } from "react";
import "./Login.css"; 
import {
  FaFacebook,
  FaLinkedin,
  FaGoogle,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNameChange = e => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.length >= 4 && value.length <= 20);
  };

  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handlePasswordChange = e => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&@$!%*?&]{8,}$/.test(
        value
      )
    );
  };

  const isSignUpButtonEnabled = name && email && password;

  const handleSignUp = () => {
    if (isSignUpButtonEnabled) {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      console.log("userData", userData);
    } else {
      console.log("Invalid form data. Please check your input fields.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="../logo.png" alt="Logo" />
      </div>

      <div className="logo-text">
        <h3>Diprella</h3>
      </div>

      <div className="left-panel">
        <div>
          <h1>Welcome Back!</h1>
        </div>

        <div>
          <p>To keep connected with us please login with your personal info </p>
        </div>
        <div>
          <button
            className="left-panel-button"
            style={{
              borderRadius: "25px",
              background: "#58d2a0",
              color: "white",
              border: "1px solid white",
              width: "160px",
              fontSize: "14px",
              marginTop: "38px",
            }}
            onClick={() => console.log("Sign In button clicked")}
          >
            SIGN IN
          </button>
        </div>
      </div>

      <div className="right-panel">
        <h2 style={{ color: "#43ccab", marginBottom: "20px" }}>
          Create Account
        </h2>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaGoogle className="social-icon" />
        </div>
        <div>
          <h4>or use your email for registration </h4>
        </div>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {!isNameValid && (
          <div className="error-message">
            Name must be between 4 and 20 characters
          </div>
        )}

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {!isEmailValid && (
          <div className="error-message">Invalid email address</div>
        )}

        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {!isPasswordValid && (
         <div className="error-message">
         Password must have at least one <br />
         lowercase letter, one uppercase <br />
         letter, one digit, one special character, <br />
         and be at least 8 characters long
       </div>
       
        )}

        <button
          style={{
            borderRadius: "25px",
            background: "#58d2a0",
            color: "white",
            width: "160px",
            fontSize: "14px",
            marginTop: "5px",

          }}
          onClick={handleSignUp}
          disabled={!isSignUpButtonEnabled}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
