
import { Outlet } from 'react-router-dom'
import SideBar from "../components/SideBar/SideBar";
import { Box } from '@mui/system';
import "./SidebarLayout.scss";

function SidebarLayout() {
    return (
        <div className="sidebar-layout">
            <div>
                <Box sx={{ display: { xs: 'none', md: 'none', lg:'block' } }}>
                    <SideBar />
                </Box>
            </div>  
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default SidebarLayout