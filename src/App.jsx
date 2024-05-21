import { useState } from 'react'
import Home from './sections/Home';
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <Home/>
    </div>
  )
}

export default App
