import React, { useState, useEffect } from 'react';

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

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
    },
    container: {
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    header: {
      color: '#333',
      marginBottom: '80px',
    },
    formGroup: {
      marginBottom: '5px',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    result: {
      marginTop: '20px',
      fontSize: '1.2em',
      color: '#333',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Currency Converter</h1>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            From:
            <input
              type="text"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              placeholder="Enter currency code (e.g., USD)"
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            To:
            <input
              type="text"
              value={toCurrency}
              onChange={handleToCurrencyChange}
              placeholder="Enter currency code (e.g., IDR)"
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              style={styles.input}
            />
          </label>
        </div>
        {rate && (
          <p style={styles.result}>
            {amount} {fromCurrency} is equal to {(amount * rate).toFixed(2)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
