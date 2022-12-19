

import PostPage from './pages/PostPage';
import { Routes ,Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import TestPage from './pages/TestPage';
function App() {
  return (
    <BrowserRouter>
      <Routes >
          <Route path="/" element={<PostPage />} />
          <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
