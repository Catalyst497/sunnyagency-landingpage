import  {useState} from "react";
import Link from "/src/components/MyLink"

function Landing({isMobile}) {
const [isOpen, setIsOpen] = useState(false)

function handleMenuClick(e){
  console.log(e.target)
  if(e.target.tagName === "A" && isMobile) setIsOpen(prev => !prev)
}

  return (
    <section className="landing">
      <img
        className="header-bg"
        src= {isMobile ? "./images/mobile/image-header.jpg" : "./images/desktop/image-header.jpg"}
        alt=""
      /> 
      
      
      <div className="landing-content">
        {/* Header */}
        <div className="header">
          <div className="logo"><img src="./images/logo.svg" alt="logo" className="logo-img" /></div>
          {isMobile && <div className="menu-icon">
            <img src="./images/icon-hamburger.svg" alt="" className="hamburger" onClick = {() => setIsOpen(prev => !prev)}/>
          </div> }
          <div  className= {`header-links ${isMobile && `mobile ${isOpen && 'show'}`}`}>
            <Link  to = "about" className="no-bg"
onClick = {(e) => handleMenuClick(e)}
            
            >About</Link>
            <Link to = "services" className="no-bg"
            
onClick = {(e) => handleMenuClick(e)}
            >Services</Link>
            <Link to = "projects" className="no-bg"
onClick = {(e) => handleMenuClick(e)}
            >Projects</Link>
            <Link to = "footer" className="white-bg" 
onClick = {(e) => handleMenuClick(e)}
            >CONTACT</Link>
          </div>
        </div>
        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            WE ARE CREATIVES
          </div>
        
          <div className="hero-arrow">
            <img src="./images/icon-arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
