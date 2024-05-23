import { useState } from 'react'
import Home from './sections/Home';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import './index.css'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
  const [count, setCount] = useState(0);

  return(
    <Router>
      <div>
        <Routes>
        <Route path='/webx' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
