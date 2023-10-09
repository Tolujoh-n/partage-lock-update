import React from "react";
import Header from "./components/header";
import Signheader from "./components/Signheader";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";
import About from "./components/About";
import Calendar from "./components/Calendar";

export function SignInPrompt({ greeting, onClick, isSignedIn }) {
  return (
    <main>
      <Header onClick={onClick} />

      <About />
      <Services />
      <Contact />

      <Footer />

    </main>
  );
}

export function SignOutButton({ isSignedIn, accountId, onClick }) {
  return (
    <>
      {/* <button style={{ float: "right" }} onClick={onClick}>
        Sign out {accountId}
      </button> */}
      <main>
        <Signheader onClick={onClick} />

        <Calendar />

        <Footer />
      </main>
    </>
  );
}
