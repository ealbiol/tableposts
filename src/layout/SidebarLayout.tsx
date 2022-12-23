
import { Outlet } from 'react-router-dom'
import SideBar from "../components/SideBar/SideBar";
import { Box } from '@mui/system';

function SidebarLayout() {
    return (
        <div style={{display:"flex", alignItems:"flex-start", marginTop:"1%"}}>
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