import React, { useEffect } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import SignOutButton from "../ui-components";

const Header = ({ onClick }) => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="">
              Partage
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about-boxes">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">
                  Marketplace
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Whitepaper
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a onClick={onClick} className="getstarted scrollto">
                  Connect Wallet
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <h1>
            <span style={{ color: "#c5f801" }}>Blockchain </span> controlled{" "}
            <span style={{ color: "#c5f801" }}>Smart lock</span>
          </h1>
          <h2>
            Partage is a p2p sharing system for Utility NFTs. Providers mint,
            fractionalize and share supplies and utilities on the Bitcoin
            blockchain.
          </h2>
          <div className="d-flex">
            <a onClick={onClick} className="btn-get-started scrollto">
              <b>Connect Wallet</b>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
