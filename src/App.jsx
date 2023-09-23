import { useEffect, useState } from 'react'
import Landing from './components/Landing';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Landing />
    <About />
    </>
  )
}

export default App
