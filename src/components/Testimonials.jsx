import React from "react";

function Testimonials() {
  return (
    <section className="testimonials">
      <div>
        <h3>Client testimonials</h3>
        <div className="testimonials-grid">
          <div className="testimony">
            <div className="testimonial-image">
              <img src="./images/image-emily.jpg" alt="Emily" />
            </div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="name">
              <h5>Emily R.</h5>
              <div>Marketing Director</div>
            </div>
          </div>
          <div className="testimony">
            <div className="testimonial-image">
              <img src="./images/image-thomas.jpg" alt="Thomas" />
            </div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="name">
              <h5>Thomas S.</h5>
              <div>Chief Operating Officer</div>
            </div>
          </div>
          <div className="testimony">
            <div className="testimonial-image">
              <img src="./images/image-jennie.jpg" alt="Jennie" />
            </div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div className="name">
              <h5>Jennie F.</h5>
              <div>Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
