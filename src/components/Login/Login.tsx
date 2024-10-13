import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.svg";
import Art from "../../assets/pablo-sign-in 1 (1).png";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changeVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={Logo} alt="Lendsqr Logo" />
        <h1>lendsqr</h1>
      </div>

      <div className="art-login-form">
        <div>
          <img src={Art} alt="lendsqr Art" />
        </div>

        <div className="loginForm">
          <form>
            <div className="welcome-greeting">
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>

            <div className="email-input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="password-input">
              <input
                type={passwordVisibility ? "text" : "password"}
                placeholder="Password"
              />
              <button type="button" onClick={changeVisibility}>
                {passwordVisibility ? "HIDE" : "SHOW"}
              </button>
            </div>

            <div className="forgot-password">
              <p>FORGOT PASSWORD</p>
            </div>

            <div className="login-btn">
              <button type="button">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
