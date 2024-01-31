import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[confirmpass, setconfirmPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(email);
    }

    return(
        < div className="auth-form-container">
            <h2>Portfolio Tracker</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your username" />
                <label htmlFor = "email"></label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="Enter your email" id= "email" name ="email" />
                <label for = "password"></label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder="Enter your password" id= "password" name ="password" />
                <label for = "Confirm Password"></label>
                <input value={confirmpass} onChange={(e) => setconfirmPass(e.target.value)} type = "password" placeholder="Confirm your password" id= "password" name ="password" />
                <button type="submit">Sign Up</button>
            </form>
            <div
  className="signup-textfield"
  onClick={() => props.onFormSwitch('login')}
>
  Already have an account? Login
</div>
        </div>
        )
    }