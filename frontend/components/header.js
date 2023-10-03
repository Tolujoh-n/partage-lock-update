import React, { useEffect } from "react";
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import SignOutButton from "../ui-components";

const Header = ({
  onClick,
  isSignedIn,
  contractId,
  wallet,
  disconnectWallet,
}) => {
  const truncatedAddress = isSignedIn
    ? `${walletAddress.slice(0, 6)}...${wallet.slice(-4)}`
    : "";
    
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
              {isSignedIn ? (
                <>
                  <li className="wallet-address">
                    <span>{truncatedAddress}</span>
                  </li>
                  <li className="disconnect-wallet">
                    <button
                      style={{
                        backgroundColor: "rgb(79, 209, 226)",
                        color: "#333333",
                      }}
                      className="btn btn-primary"
                      onClick={disconnectWallet}
                    >
                      Disconnect
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <a onClick={onClick} className="getstarted scrollto">
                    Connect Wallet
                  </a>
                </li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <br></br>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSnHUCBGG0FRNgRNH3WAFI243y7XK6w63WugnmzjhmGW2EKvgHgnmgDtzzismnvsDjPIbjLbjZfsWzm/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            id="heroiframe"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ height: "100%" }} // Set the height of the iframe to 100%
          ></iframe>
        </div>
      </section> */}
    </>
  );
};

export default Header;
