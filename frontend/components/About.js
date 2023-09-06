import React from 'react';
import heroImage from '../assets/img/arduino-lock.jpg';

const About = () => {
  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div id="aboutmore" className="row">
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
            <p></p>
            <br></br>
            <h3>
              A Blockchain-controlled smart lock
            </h3>
            <br></br>
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
            <p>
              A slides deck presentation is available{' '}
              <a
                style={{ color: '#c8ff00' }}
                href="https://docs.google.com/presentation/d/1NSlpmjlvIirzLaNsZy6ndhA5ZV40h5ATqszn9FavYn8/edit?usp=sharing"
              >
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
