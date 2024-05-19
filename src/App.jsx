import React from 'react';
import './App.css';

function App() {
  return (
    <div className="homescreen bg-cover bg-center h-[100vh] w-[100vw]">
      <h1 className="text-center text-[100px] font-cursive text-[#0401be] stroke-[#22073e] stroke-3">
        Hello, Makassar!
      </h1>
      <button 
        className="button bg-blue-500 hover:bg-blue-700 text-white text-[40px] rounded-[50px] py-5 px-10 fixed bottom-20 left-[40%] font-cursive transition duration-400 animate-pulse"
        onClick={() => window.location.href = '/components/pickchar.jsx'}
      >
        Press to Start
      </button>
    </div>
  );
}

export default App;
