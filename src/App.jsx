import { useEffect, useState } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import RandomImages from "./components/RandomImages";
import Footer from "./components/Footer";


function App() {
  
  const Breakpoints = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", () => handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { isMobile: width <= 500 };
  };
  const { isMobile } = Breakpoints();
  return (
    <>
      <Landing isMobile={isMobile} />
      <About  />
      <Testimonials />
      <RandomImages />
      <Footer />
      <div className="attribution" style={{textAlign: "center"}}>
        Challenge by{" "}
        <a href="https://frontendmentor.io/" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Catalyst497">Daniel Duyilemi</a> and <a href="https://github.com/Ebunski">Ebunski</a>.
      </div>
    </>
  );
}

export default App;
