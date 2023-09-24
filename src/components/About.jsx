import React from "react";

function About() {
  return (
    <section id = "about" className="about-us">
      <div className="about-block one">
        <div>
          <h3>Transform your brand</h3>
          <p>
            {" "}
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <span className="text">Learn more</span>
            <span className="decoration"></span>
          </a>
        </div>
      </div>
      <div className="about-block two">
        <img
          src="./images/desktop/image-transform.jpg"
          alt="An Egg"
          className="gallery-image image-two"
        />
      </div>
      <div className="about-block three">
        <img
          src="./images/desktop/image-stand-out.jpg"
          alt="An Nice Cup"
          className="gallery-image image-three"
        />
      </div>
      <div className="about-block four">
        <div>
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="">
            <span className="text">Learn More</span>
            <span className="decoration"></span>
          </a>
        </div>
      </div>
      <div className="about-block five">
        <div className="image">
          <img
            src="./images/desktop/image-graphic-design.jpg"
            alt="Graphic design image"
            className="design-image"
          />
        </div>
        <div className="text">
          <div>
            <h4>Graphic design</h4>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
      </div>
      <div className="about-block six">
        <div className="image">
          <img
            src="./images/desktop/image-photography.jpg"
            alt="Photograph"
            className="photograph"
          />
        </div>
        <div className="text">
          <div>
            <h4>Photography</h4>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
