
import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Portfolio Tracker</h2>
            

            <form onSubmit ={handleSubmit}>
                <label htmlFor = "email"></label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="Enter your email" id= "email" name ="email" />
                <label htmlFor= "password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder="Enter your password" id= "password" name ="password" />
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
    )
}       