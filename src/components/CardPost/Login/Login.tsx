
import { TextField } from "@mui/material";
import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const theme = createTheme({
        palette: {
            primary: {
                main: '#E50914',
            }
        },
    });

    const handleLogin = () => {
        console.log("UserName", user);
        console.log("Password", password);
        localStorage.setItem("user", JSON.stringify({ user: user, password: password }))
        console.log(localStorage);
        if (user && password) {
            navigate("/");
        } else {
            alert("Missing Login data")
        }
    }

    return (
        <div className="login">
            <ThemeProvider theme={theme}>
                <span style={{ color: "white", marginBottom: "5%" }}>User Name</span>
                <TextField
                    //helperText="Please enter your email"
                    id="demo-helper-text-misaligned"
                    type="email"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    sx={{ input: { color: 'white' }, border: '2px solid white', borderRadius: 0.5 }}
                />
                <span style={{ color: "white", marginBottom: "5%", marginTop: "5%" }}>Password</span>
                <TextField id="demo-helper-text-misaligned-no-helper"
                    value={password}
                    type={"password"}
                    onChange={e => setPassword(e.target.value)}
                    sx={{ input: { color: 'white' }, border: '2px solid white', borderRadius: 0.5 }}

                />

                <Button
                    variant="contained"
                    sx={{ width: 200, padding: 1, margin: 2 }}
                    onClick={() => handleLogin()}
                    color="primary"
                >
                    Login
                </Button>
            </ThemeProvider>
        </div>
    )
}

export default Login