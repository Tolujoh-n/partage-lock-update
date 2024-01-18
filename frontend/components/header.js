import React, { useEffect, useState } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";

const Header = ({ onClick, accountId }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    initHeaderScrolled();
  }, []);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    console.log("Mobile nav toggled. State:", isMobileNavOpen);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="">
              <b>PARTAGE</b>
            </a>
          </h1>

          <nav
            id="navbar"
            className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
          >
            <ul
              className={`nav-list ${isMobileNavOpen ? "mobile-nav-open" : ""}`}
            >
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://medium.com/partage_xyz/partage-white-paper-v2-c0cbea46e2f8"
                  target="_blank"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  className="getstarted scrollto"
                  href="https://www.masterlock.com/products/bluetooth-electronic-locks"
                  target="_blank"
                >
                  Download App
                </a>
              </li>
            </ul>

            {/* <i
              className="bi bi-list mobile-nav-toggle"
              onClick={handleMobileNavToggle}
            ></i> */}
            <a
              className="getstarted scrollto custom-hidden-on-large"
              href="https://www.masterlock.com/products/bluetooth-electronic-locks"
              target="_blank"
            >
              Download App
            </a>

            <br></br>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
