import React from 'react';
import './App.css';

function App() {
  return (
    <div className='homescreen'>
      <h1 className='judul'>Hello, Makassar!</h1>
      <button 
        className='main animated-button'
        onClick={() => window.location.href = '/components/pickchar.jsx'}
      >
        Press to Start
      </button>
    </div>
  );
}

export default App;
