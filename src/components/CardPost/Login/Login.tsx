
import { TextField } from "@mui/material";
import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log("UserName", user);
        console.log("Password", password);
        localStorage.setItem("user", JSON.stringify({ user: user, password: password }))
        console.log(localStorage);
        if(user && password){
            navigate("/");
        } else {
            alert("Missing data")
        }
    }

    return (
        <div className="login">
            User name
            <TextField
                helperText="Please enter your email"
                id="demo-helper-text-misaligned"
                type="email"
                value={user}
                onChange={e => setUser(e.target.value)}

            />
            Password:
            <TextField id="demo-helper-text-misaligned-no-helper"
                value={password}
                type={"password"}
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={() => handleLogin()}>Login</Button>
        </div>
    )
}

export default Login