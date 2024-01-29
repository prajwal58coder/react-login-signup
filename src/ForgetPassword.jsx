import React, { useState } from "react";

export const ForgetPassword = (props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic for handling forget password (e.g., send reset email)
    console.log(`Password reset email sent to ${email}`);
  }

  return (
    <div className="auth-form-container">
      <h2>Portfolio Tracker</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
        />
        
      </form>
      
      <button
        className="otpverification-textfield"
        onClick={() => props.onFormSwitch('otpverification')}
      >
        Continue
      </button>
    </div>
  );
};
