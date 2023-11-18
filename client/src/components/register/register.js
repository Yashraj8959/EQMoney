import React, {useState} from "react";
import "./register.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser ({...user,[name]:value})
    }

const register = () => {
    const { name, email,password, reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword)){
        //  alert("posted")
        axios.post("http://localhost:9002/register", user)
        .then( res => alert(res.data.message))
        navigate("/login")
        // .then((res) => {
        //     // Handle successful response here
        //     console.log(res);
        //   })
        //   .catch((err) => {
        //     // Handle errors here
        //     console.error('Axios Error:', err);
        //   });
    } else {
        alert("invalid input")
    }
}

    return (
        <div className="form-box register">
                <div className="form-details">
                 <h2>Welcome to EQ Money</h2>
                 <p>Please enter your personal information to join us.</p>
                </div>
                <div className="form-content">
                {console.log("User",user)}
                 <h2>Register</h2>
              <form>
              <div className="input-field">
              <input type="text" name="name" value={user.name}  placeholder="Enter your Name" onChange={handleChange}></input>
              </div>
              <div className="input-field"> 
              <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
              </div>
               <div className="input-field">
               <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
               </div>
               <div className="input-field">
               <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your Password" onChange={handleChange}></input>               </div>
               <div className="button" onClick={register}>Register</div>
               <div>or</div>
                <div className="button" onClick={() => navigate("/login")}>Login</div>
            </form>
            </div>
            </div>
        
        // <div className="register">
        //    < h1>Register</h1>
        //    <input type="text" name="name" value={user.name}  placeholder="Enter your Name" onChange={handleChange}></input>
        //    <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
        //    <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
        //    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your Password" onChange={handleChange}></input>
        //    <div className="button" onClick={register}>Register</div>
        //    <div>or</div>
        //    <div className="button" onClick={() => navigate("/login")}>Login</div>
        // </div>

    );
}

export default Register;