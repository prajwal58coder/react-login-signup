import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(email);
    }

    return(
        < div className="auth-form-container">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">UserName</label>
                <input value={name} name="name" id="name" placeholder="Enter your User Name" />
                <label htmlFor = "email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="Enter your email" id= "email" name ="email" />
                <label for = "password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder="Enter your password" id= "password" name ="password" />
                <label for = "Confirm Password">Confirm Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder="Confirm your password" id= "password" name ="password" />
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={() =>props.onFormSwitch('login')}> Already have an account? Login Here. </button>
        </div>
        )
    }