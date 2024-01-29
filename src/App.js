import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { ForgetPassword } from './ForgetPassword';
import { OTPVerification } from './OTPVerification';
import { NewPassword } from './NewPassword';
import { OTPVerificationFailed } from './OTPVerficationFailed';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [emailForReset, setEmailForReset] = useState('');

  
    
    const handleFormSwitch = (formName, email = '') => {
      setCurrentForm(formName);
      setEmailForReset(email);
  };

  const handleOtpVerified = (isVerified) => {
    if (isVerified) {
      setCurrentForm('newpassword');
    } else {
      setCurrentForm('otpverificationfailed');
    }
  };
  
      
  return (
    <div className="App">
      {currentForm === 'login' && <Login onFormSwitch={handleFormSwitch} />}
      {currentForm === 'register' && (
        <Register onFormSwitch={handleFormSwitch} />
      )}
      {currentForm === "forgetpassword" && (
        <ForgetPassword onFormSwitch={handleFormSwitch} />
      )}
      {currentForm === "otpverification" && (
        <OTPVerification onFormSwitch={handleFormSwitch} onOtpVerified={handleOtpVerified} email={emailForReset} />
      )}
      {currentForm === "newpassword" && (
        <NewPassword onFormSwitch={handleFormSwitch} />
      )}
      {currentForm === 'otpverificationfailed' && (
        <OTPVerificationFailed onFormSwitch={handleFormSwitch} />
      )}
    </div>

  );
}

export default App;
