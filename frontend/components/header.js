import React, { useEffect } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";

const Header = ({ onClick, accountId }) => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="">
              <b>PARTAGE</b>
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://medium.com/partage_xyz/partage-white-paper-v2-c0cbea46e2f8" target="_blank"
                >
                  Documentation
                </a>
              </li>
              {/* <li>
                <a
                  className="getstarted scrollto"
                  href="https://www.masterlock.com/products/bluetooth-electronic-locks" target="_blank"
                >
                  Buy Lock
                </a>
              </li> */}
              <li>
                <a
                  className="getstarted scrollto"
                  href="https://www.masterlock.com/products/bluetooth-electronic-locks" target="_blank"
                >
                  Download App
                </a>
              </li>
              {/* <li>
                <a className="">
                  {accountId}
                </a>
              </li>
              <li>
                <a onClick={onClick} className="getstarted scrollto">
                  Connect Wallet
                </a>
              </li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <br></br>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
