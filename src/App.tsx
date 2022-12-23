import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import PostPage from './pages/PostPage';
import TestPage from './pages/TestPage';
import "./App.scss"
import "./scss/appStyling.scss"
import NavBar from './components/NavBar/NavBar';
import Login from './components/CardPost/Login/Login';
import SidebarLayout from './layout/SidebarLayout';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        
          <Routes>
            <Route element={<SidebarLayout/>}>
                <Route path="/home" element={<PostPage />} />
            </Route>
        
            <Route path="/" element={<Login />} />
          </Routes>

    </BrowserRouter>
  );
};
export default App;
