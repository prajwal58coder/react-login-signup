import React from 'react';

export const OTPVerificationFailed = (props) => {
  return (
    <div className="auth-form-container">
      <h2>OTP Verification Failed</h2>

      <p>The OTP verification failed. Please check your OTP and try again.</p>

      <div
        className="login-textfield"
        onClick={() => props.onFormSwitch('otpverification')}
      >
        Back to OTP Verification
      </div>
    </div>
  );
};
