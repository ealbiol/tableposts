import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import PostPage from './pages/PostPage';
import TestPage from './pages/TestPage';
import "./App.scss"
import "./scss/appStyling.scss"
import NavBar from './components/NavBar/NavBar';
import Login from './components/CardPost/Login/Login';
import SideBar from "./components/SideBar/SideBar";
import { Box } from '@mui/system';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='sideBar-and-grid-posts'>
          <Box sx={{ display: { xs: 'none', md: 'none', lg:'block' } }}>
            <SideBar />
          </Box>
        <div>
          <Routes>
            <Route path="/" element={<PostPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
};
export default App;
