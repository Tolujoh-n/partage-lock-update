import React, { useState } from "react";
import Calendar from "react-calendar";

function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // Set daily price
  const dailyPrice = 10;
  const [amountToPay, setAmountToPay] = useState(null);
  const [email, setEmail] = useState("");

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
      setAmountToPay(amount);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBuyClick = () => {
    // Implement buy logic
    alert(
      `Buy button clicked. Amount to pay: $${amountToPay}, Email: ${email}`
    );
  };

  return (
    <section id="about-boxes" className="about-boxes">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Booking Calendar</h2>
        </div>

        <div className="calendar-container">
          <div className="calendar">
            <Calendar
              onChange={handleStartDateChange}
              value={startDate}
              selectRange={true}
            />
          </div>
          <div className="date-inputs">
            <input
              type="date"
              onChange={handleStartDateChange}
              value={startDate ? startDate.toISOString().split("T")[0] : ""}
              placeholder="Start Date"
            />
            <input
              type="date"
              onChange={handleEndDateChange}
              value={endDate ? endDate.toISOString().split("T")[0] : ""}
              placeholder="End Date"
            />
          </div>
          {amountToPay && (
            <p className="amount-to-pay">Amount to pay: ${amountToPay}</p>
          )}
          <input
            type="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
          />
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
