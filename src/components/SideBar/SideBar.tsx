import "./SideBar.scss"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideBar = () => {
    const [sideBarVisibility, setSideBarVisibility] = useState(false)

    const handleSideBarVisibility = () => {
        setSideBarVisibility(!sideBarVisibility)
    }
    return (
        <div style={{
            display: "flex", height: "100%", marginTop: "20px"
        }}>
            <div
            >
                {
                    sideBarVisibility ?
                        <div className="sidebar-container">
                            <p className="sidebar-container__element">Dashboard</p>
                            <p className="sidebar-container__element">Page 1</p>
                            <p className="sidebar-container__element">Page 2</p>
                            <p className="sidebar-container__element">Page 3</p>
                        </div>
                        :
                        ""
                }
            </div>
            <div style={{
                display: "flex", justifyContent: "center"
            }}>
                {
                    sideBarVisibility ?
                        <IconButton onClick={() => handleSideBarVisibility()}>
                            <ArrowForwardIosIcon sx={{ color: "grey" }} />
                        </IconButton>
                        :
                        <IconButton onClick={() => handleSideBarVisibility()}>
                            <ArrowBackIosIcon sx={{ color: "grey" }} />
                        </IconButton>
                }
            </div>
        </div>
    )
}

export default SideBar
