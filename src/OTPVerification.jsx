import React, { useState } from "react";

export const OTPVerification = (props) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic for handling OTP verification
    console.log(`Verifying OTP: ${otp}`);
    // You can add logic for handling successful verification and navigation
    props.onOtpVerified();
  }

  return (
    <div className="auth-form-container">
      <h2>OTP Verification</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter the OTP sent to your email:</label>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          placeholder="Enter OTP"
          id="otp"
          name="otp"
        />
        <button onClick={() => console.log('Button clicked!')}>Verify OTP</button>
      </form>
      
      <div className="signup-textfield" onClick={() => props.onFormSwitch('login')}>
        Back to Login
      </div>
    </div>
  );
};
