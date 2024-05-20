import React, { useState, useEffect } from 'react';
import './displayNews.css';

function CurrencyConverter() {
  const [rate, setRate] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IDR');
  const [amount, setAmount] = useState(1);

  const apiKey = "4c768f076996231638e5256f";

  const fetchRate = () => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setRate(data.conversion_rates[toCurrency]))
      .catch(error => console.error('Error fetching the exchange rate:', error));
  };

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  const handleFromCurrencyChange = (e) => setFromCurrency(e.target.value.toUpperCase());
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value.toUpperCase());
  const handleAmountChange = (e) => setAmount(e.target.value);

  return (
    <div>
      <h1>Currency Converter</h1>
      <br />
      <div>
        <label>
          From:
          <input
            type="text"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
            placeholder="Enter currency code (e.g., USD)"
          />
        </label>
        <label>
          To:
          <input
            type="text"
            value={toCurrency}
            onChange={handleToCurrencyChange}
            placeholder="Enter currency code (e.g., IDR)"
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </label>
        <br />
        <button onClick={fetchRate}>Convert</button>
      </div>
      {rate && (
        <p>
          {amount} {fromCurrency} is equal to {(amount * rate).toFixed(2)} {toCurrency}
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
