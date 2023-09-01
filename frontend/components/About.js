import React from 'react';
import heroImage from '../assets/img/hero-bg.png';

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
            <h3>Welcome to Partage Lock!</h3>
            <p className="fst-italic">
              A Blockchain-controlled smart lock for Utility NFT owners willing
              to share physical access to their real-world asset NFTs.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Owners can remotely
                manage users' access through to a vault, a garage, or an
                apartment with Partage Lock
              </li>
              <li>
                <i className="ri-check-double-line"></i> Providers can remotely
                manage users' access through to a vault, a garage, or an
                apartment.
              </li>
              <li>
                <i className="ri-check-double-line"></i> With Partage Lock,
                owners and providers can remotely manage users' access through
                to a vault, a garage, or an apartment.
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
