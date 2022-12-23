import "./SideBar.scss"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SideBar = () => {
    const [sideBarVisibility, setSideBarVisibility] = useState(false)

    const handleSideBarVisibility = () => {
        setSideBarVisibility(!sideBarVisibility)
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#E50914',
            }
        },
    });

    return (
        <div style={{ display: "flex" }}>
            <div>
                {
                    sideBarVisibility ?
                        <ThemeProvider theme={theme}>
                            <div className="sidebar-container">
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Dashboard</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 1</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 1</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 2</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 3</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 4</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 5</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 6</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 7</Button>
                                <Button variant="contained" sx={{ width: 200, padding: 1, margin: 2 }} color="primary">Page 8</Button>
                            </div>
                        </ThemeProvider>
                        :
                        ""
                }
            </div>
            <div style={{ marginTop: "4%", }}>
                {
                    sideBarVisibility ?
                        <IconButton onClick={() => handleSideBarVisibility()}>
                            <ArrowBackIosIcon sx={{ color: "grey", fontSize: "40px" }} />
                        </IconButton>
                        :
                        <IconButton onClick={() => handleSideBarVisibility()}>
                            <ArrowForwardIosIcon sx={{ color: "grey", fontSize: "40px" }} />
                        </IconButton>
                }
            </div>
        </div>
    )
}

export default SideBar
