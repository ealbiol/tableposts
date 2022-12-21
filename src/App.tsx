

import PostPage from './pages/PostPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import TestPage from './pages/TestPage';

import "./App.scss"
import NavBar from './components/NavBar/NavBar';
import Login from './components/CardPost/Login/Login';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
