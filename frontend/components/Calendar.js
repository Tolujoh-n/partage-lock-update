import React, { useState } from 'react';

function Calendar() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // Set daily price
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
    alert(`Buy button clicked.\nName: ${name}\nDescription: ${description}\nEmail: ${email}\nStart Date: ${formatDate(startDate)}\nEnd Date: ${formatDate(endDate)}\nAmount to pay: $${amountToPay}`);
  };

  return (
    <section id="about-boxes" className="about-boxes">

      <br></br>
      <div className="container calenderly" data-aos="fade-up">
      <div className="calendar-container">
      <h1>Booking Calendar</h1>
      <div className="date-inputs">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="date-inputs">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
      </div>
      <div className="date-inputs">
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          onChange={(e) => handleStartDateChange(new Date(e.target.value))}
          value={formatDate(startDate)}
          placeholder="Start Date"
        />
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          onChange={(e) => handleEndDateChange(new Date(e.target.value))}
          value={formatDate(endDate)}
          placeholder="End Date"
        />
      </div>
      {amountToPay !== null && <p className="amount-to-pay">Amount to pay: ${amountToPay}</p>}

      <div className="date-inputs">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Enter your email"
        />
      </div>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
      </div>
    </section>
    
    
    
  );
}

export default Calendar;
