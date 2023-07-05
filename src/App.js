import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import PostPage from './pages/PostPage/PostPage'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog/:title" element={<PostPage/>}/>
      </Routes>
    


    </BrowserRouter>
  );
}

export default App;
