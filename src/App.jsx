import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import RandomImages from './components/RandomImages';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing />
    <About />
    <Testimonials />
    <RandomImages />
    <Footer />
    </>
  )
}

export default App
