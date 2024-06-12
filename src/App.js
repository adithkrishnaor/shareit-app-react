import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import ViewPost from './components/ViewPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Post/>}/>
      <Route path='/viewpost' element={<ViewPost/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
