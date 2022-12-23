
import { Outlet } from 'react-router-dom'
import SideBar from "../components/SideBar/SideBar";
import { Box } from '@mui/system';

function SidebarLayout() {
    return (
        <div>
            <div className='sideBar-and-grid-posts'>
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