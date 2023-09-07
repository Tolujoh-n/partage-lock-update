import React from 'react';
import heroImage from '../assets/img/arduino-lock.jpg';

const About = () => {
  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div id="aboutmore" className="row">
          <div>
          <p></p>
          <br></br>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSnHUCBGG0FRNgRNH3WAFI243y7XK6w63WugnmzjhmGW2EKvgHgnmgDtzzismnvsDjPIbjLbjZfsWzm/embed?start=false&loop=false&delayms=3000" 
              frameborder="0" 
              width="960" 
              height="569" 
              allowfullscreen="true" 
              mozallowfullscreen="true" 
              webkitallowfullscreen="true">
            </iframe>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <p></p>
            <br></br>
            <img
              id="aboutimg"
              src={heroImage}
              className="img-fluid"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <br></br>
            <br></br>
            <br></br>
            <div className="section-title">
            <h2>What is Partage Lock?</h2>
            </div>
            <h3>
              A Blockchain-controlled smart lock for Utility NFTs
            </h3>
            <br></br>
            <p>Owners, providers, remotely
                manage users' access to real-world asset NFTs safely locked in a vault, a garage, or a
                house.</p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> <b>Secured:</b> Only the smart contract owner can control the lock. 
              </li>
              <li>
                <i className="ri-check-double-line"></i> <b>Decentralized:</b> The owner is independent from any third party platform.
              </li>
              <li>
                <i className="ri-check-double-line"></i> <b>Trustworthy:</b> Code is law. Once deployed on blockchain, code is forever.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default About;
