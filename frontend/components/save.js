import React, { useState } from 'react';

function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dailyPrice = 10;
  const [amountToPay, setAmountToPay] = useState(null);
  const [email, setEmail] = useState('');

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
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
      setAmountToPay(amount);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBuyClick = () => {
    // Implement your buy logic here, e.g., initiate a transaction
    alert(`Buy button clicked. Amount to pay: $${amountToPay}, Email: ${email}`);
  };

  return (
    <div className="calendar-container">
      <h1>Booking Calendar</h1>
      <div className="date-inputs">
        <input
          type="date"
          onChange={(e) => handleStartDateChange(new Date(e.target.value))}
          value={formatDate(startDate)}
          placeholder="Start Date"
        />
        <input
          type="date"
          onChange={(e) => handleEndDateChange(new Date(e.target.value))}
          value={formatDate(endDate)}
          placeholder="End Date"
        />
      </div>
      {amountToPay !== null && <p className="amount-to-pay">Amount to pay: ${amountToPay}</p>}
      <input
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
      />
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default Calendar;
