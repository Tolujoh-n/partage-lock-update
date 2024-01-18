import React from "react";
import heroImage from "../assets/img/arduino-lock.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div id="aboutmore" className="row" style={{ padding: "20px" }}>
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <iframe
                style={{ borderRadius: "10px", minHeight: "300px" }}
                src="https://www.youtube.com/embed/qaH6ZEW59FA?si=foZV10yH5MCR5rk6"
              ></iframe>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="section-title">
                <h2>What is Partage?</h2>
              </div>
              <h3>A network of blockchain-controlled smart locks on the Near Protocol</h3>
              <br></br>
              <p>
              For owners to generate a yield out of selling temporary access to their underused assets.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> <b>Secured:</b> Owner-only functions in the smart-contract.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> <b>Decentralized:</b>{" "}
                  No middleman server between the owner and the user.
                </li>
                <li>
                  <i className="ri-check-double-line"></i> <b>Trustworthy:</b>{" "}
                  Code is law, forever encrypted in the blockchain.
                </li>
              </ul>
              <br></br>
              <a
                className="buybut"
                href="https://www.masterlock.com/products/bluetooth-electronic-locks"
                target="_blank"
              >
                COMPATIBLE LOCKS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
