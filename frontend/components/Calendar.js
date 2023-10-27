import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Calendar({ onSubmit, currentAccountId }) {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // Set daily price
  const dailyPrice = 10;
  const [totalPrice, setTotalPrice] = useState(null);

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    calculateAmount(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    calculateAmount(startDate, date);
  };

  const calculateAmount = (start, end) => {
    if (start && end) {
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      const amount = dailyPrice * days;
      setTotalPrice(amount);
    }
  };
  const numberOfDays =
    startDate && endDate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
      : 0;

  const pin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)

  return (
    <section onSubmit={onSubmit} id="about-boxes" className="about-boxes">
      <br></br>
      <div className="container calenderly" data-aos="fade-up">
        <br></br>
        <div className="calendar-container">
          <h1 id="calender-title">Booking Form</h1>
          <div className="date-inputs">
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="off"
              autoFocus
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="date-inputs">
            <label htmlFor="description">Description:</label>
            <textarea
              autoComplete="off"
              autoFocus
              id="description"
              placeholder="Enter a description"
              required
            />
          </div>
          <div className="date-inputs">
            <label htmlFor="start-date">Start Date:</label>
            <input
              autoComplete="off"
              autoFocus
              type="date"
              id="start-date"
              onChange={(e) => handleStartDateChange(new Date(e.target.value))}
              value={formatDate(startDate)}
              placeholder="Start Date"
            />
            <label htmlFor="end-date">End Date:</label>
            <input
              autoComplete="off"
              autoFocus
              type="date"
              id="end-date"
              onChange={(e) => handleEndDateChange(new Date(e.target.value))}
              value={formatDate(endDate)}
              placeholder="End Date"
            />
          </div>
          {totalPrice === null && (
            <div className="payment-details">
              <p>Daily Price:</p>
              <p>Number of Days:</p>
              <p>Total Price:</p>
            </div>
          )}
          {totalPrice !== null && (
            <div className="payment-details">
              <p>Daily Price: {dailyPrice} NEAR</p>
              <p>Number of Days: {numberOfDays} days</p>
              <p>Total Price: {totalPrice} NEAR</p>
            </div>
          )}
        </div>
        <div className="calendar-container">
          <div className="pin-display">
            <h1 id='calender-title'>Unique Access Pin</h1>
            <p>{pin}</p>
            <h2>Save this Pin or take a screenshot of it as your access may be lost if you lose your pin</h2>
          </div>
        </div>
        <div className="calendar-container">
          <div className="text-center">
            <p>Book your access, { currentAccountId }!</p>
            <button type="submit">Add Booking</button>
          </div>
        </div>
      </div>
    </section>
  );
}

Calendar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};