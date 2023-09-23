import React from 'react'

function Footer() {
  return (
    <section className='footer'>
      <div>
        <img src="./images/logo-footer.svg" alt="Logo" className="logo" />
      </div>
      <div className="pages">
        <div className="item">About</div>
        <div className="item">Services</div>
        <div className="item">Projects</div>
      </div>
      <div className="socials">
        <div><img src="./images/icon-facebook.svg" alt="" /></div>
        <div><img src="./images/icon-instagram.svg" alt="" /></div>
        <div><img src="./images/icon-twitter.svg" alt="" /></div>
        <div><img src="./images/icon-pinterest.svg" alt="" /></div>
      </div>
    </section>
  )
}

export default Footer