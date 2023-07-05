import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import PostPage from './pages/PostPage/PostPage'
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog/:title" element={<PostPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
