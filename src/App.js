import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Home/Navbar";
import Home from './Components/Home/Home';
import Images from './Components/Images/Images';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/images' element={<Images />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
