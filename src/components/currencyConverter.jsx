import React, { useState, useEffect } from 'react';
import './displayNews.css';

function CurrencyConverter() {
  const [rate, setRate] = useState(null);
  const fromCurrency = 'USD';
  const toCurrency = 'IDR';

  useEffect(() => {
    const apiKey = "4c768f076996231638e5256f";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setRate(data.conversion_rates[toCurrency]));
  }, [fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Exchange Rate</h1>
      <p>1 {fromCurrency} is equal to {rate} {toCurrency}</p>
    </div>
  );
}

export default CurrencyConverter;
