import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const history = useHistory();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  }

  const login = async () => {
    console.log(email, pass);
    let item = { username: email, password: pass };
    try {
      let result = await fetch("http://192.168.1.94:3000/api/user/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          
        },
        body: JSON.stringify(item)
      });

      if (result.ok) {
        result = await result.json();
        console.log(result)
        // Checking if login was successful
        if (result.message) {
          localStorage.setItem('user-info', JSON.stringify(result));
          setLoginMessage("Login successful!");
        }
      } else {
        console.error("Login failed. Invalid user credentials.");
        setLoginMessage("Login failed. Invalid user credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginMessage("Error during login. Please try again.");
    }
  }

  return (
    <div className="auth-form-container">
      <h2>Portfolio Tracker</h2>

      {loginMessage && <div className="login-message">{loginMessage}</div>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" id="email" name="email" required />
        
        <label htmlFor="password"></label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" required />

        <button type="submit">Log In</button>
      </form>

      <div
        className="signup-textfield"
        onClick={() => props.onFormSwitch('register')}
      >
        Don't have an account? Sign Up
      </div>
      
      <div
        className="forgetpassword-textfield"
        onClick={() => props.onFormSwitch('forgetpassword')}
      >
        Forget Password
      </div>
    </div>
  );
}
