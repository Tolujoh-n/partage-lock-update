import React, { useState } from 'react';

function PinDisplay( /*{ pin }*/ ) {
  // import pin from smart contract
  // OR provide a random pin from the frontend (demo)
  const pin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
  
  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container calenderly" data-aos="fade-up">
      <br></br>
      <div className="calendar-container">
      <h1 id='calender-title'>Unique Access Pin</h1>
      <div className="pin-display">
      <p>{pin}</p>
      <h2>Save this Pin or take a screenshot of it as your access may be lost if you lose your pin</h2>
    </div>
    </div>
    </div>
    </section>
    
  );
}

export default PinDisplay;