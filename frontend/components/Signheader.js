import React, { useEffect } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import SignOutButton from "../ui-components";

const Signheader = ({ onClick, accountId }) => {
  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#c5f801" }} href="">
              <b>PARTAGE LOCK</b>
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  href="https://medium.com/@juliencarbonnell/democratizing-access-to-utilities-blockchain-for-smart-cities-25eefb0348e7"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a className="">
                  {accountId}
                </a>
              </li>

              <li>
                <a onClick={onClick} className="getstarted scrollto">
                  Disconnect
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <br></br>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      
    </>
  );
};

export default Signheader;
