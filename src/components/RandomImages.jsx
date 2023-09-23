import React from "react";

function RandomImages() {
  return (
    <section id = "projects" className="random-images">
      <div className="image">
        <img
          src="./images/desktop/image-gallery-milkbottles.jpg"
          alt="Milk Bottles"
        />
      </div>
      <div className="image">
        <img src="./images/desktop/image-gallery-orange.jpg" alt="Orange" />
      </div>
      <div className="image">
        <img src="./images/desktop/image-gallery-cone.jpg" alt="Cone" />
      </div>
      <div className="image">
        <img
          src="./images/desktop/image-gallery-sugarcubes.jpg"
          alt="Sugar cubes"
        />
      </div>
    </section>
  );
}

export default RandomImages;
