import React, { useState } from "react";

export const NewPassword = (props) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling setting a new password and confirming it
    console.log(`New password: ${newPassword}, Confirm password: ${confirmPassword}`);
    // You can add logic for handling successful password update and navigation
  };

  return (
    <div className="auth-form-container">
      <h2>Portfolio Tracker</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newPassword"></label>
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="Enter New Password"
          id="newPassword"
          name="newPassword"
        />
        
        <label htmlFor="confirmPassword"></label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Your Password"
          id="confirmPassword"
          name="confirmPassword"
        />

        <button type="submit">Confirm</button>
      </form>
      
      
    </div>
  );
};
