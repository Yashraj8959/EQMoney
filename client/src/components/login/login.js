import React, {useState} from "react";
import "./login.css"
import axios from "axios"
import {useNavigate } from "react-router-dom";

const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser ({...user,[name]:value})
    }

    const login = () => {
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message);
            setLoginUser(res.data.user);
            navigate("/");
        })
    }
    return (
    
            <div className="form-box login">
                <div className="form-details">
                 <h2>Welcome to EQ Money</h2>
                 <p>Please log in using your personal information to stay connected with us.</p>
                </div>
                <div className="form-content">
                 {console.log(user)}
                 <h2>Login</h2>
              <form>
              <div className="input-field">
               <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" ></input>
               {/* <label for="email">Email</label> */}
               </div>
               <div className="input-field">
               <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
               {/* <label for="password">Password</label> */}

               </div>
               <div className="button" onClick={login}>Login</div>
               <div>or</div>
                <div className="button" onClick={() => navigate("/register")}>Register</div>
            </form>
            </div>
            </div>
        
        
    );
}

export default Login;