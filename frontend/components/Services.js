import React from 'react';
import boxImage1 from '../assets/img/mllocks.png';
import boxImage2 from '../assets/img/gglplay.png';
import boxImage3 from '../assets/img/dashboard.png';

const Services = () => {
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>How It Works?</h2>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card">
              <img
                src={boxImage1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-brush-4-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Get a Bluetooth Lock</a></h5>
                <p className="card-text">
                  Get yourself the most convenient Bluetooth lock device from our reknowned partner Master Lock.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card">
              <img
                src={boxImage2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-calendar-check-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">Download our App</a></h5>
                <p className="card-text">
                  Visit the link in navbar or look for Partage Lock app in Google Play and install it on our phone.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card">
              <img
                src={boxImage3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-icon">
                <i className="ri-movie-2-line"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">List items for share</a></h5>
                <p className="card-text">
                  Connect your near wallet and list your underused assets to generate a yield out of selling temporary access on our marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
