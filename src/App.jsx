import { useState } from 'react'
import Home from './sections/Home';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import './index.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from './sections/About';

function App() {
  const [count, setCount] = useState(0);

  return(
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/webx' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
