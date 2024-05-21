import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import StatusBarComponent from "./statusbar.jsx";
import boyImage from './assets/boy.png';
import girlImage from './assets/girl.png';
import phoneImage from './assets/phone.png';
import newsImage from './assets/news.png';
import movieImage from './assets/movie.png';
import playButton from './assets/play.png';
import calculatorImage from './assets/calculator.png';
import aboutusImage from './assets/aboutus.png';
import DisplayNews from './displayNews.jsx';
import MovieContainer from './movie.jsx';
import CurrencyConverter from './currencyConverter.jsx';
import './home.css';

const api = {
  key: "02680ce7da7e47b02d1a4ebd7596513c",
  base: "https://api.openweathermap.org/data/2.5/",
};

// Joke API URL
const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';

function BubbleChat({ message, position }) {
  return (
    <div className={`bubble-chat ${position}`} style={{ position: 'absolute', backgroundColor: '#ffffff', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      {message}
    </div>
  );
}



function Home() {
  const [weather, setWeather] = useState({});
  const [energy, setEnergy] = useState(() => getLocalStorageValue("energy", 50));
  const [money, setMoney] = useState(() => getLocalStorageValue("money", 100));
  const [affinity, setAffinity] = useState(() => getLocalStorageValue("affinity", 50));
  const [userImage, setUserImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  const [showBubbleChat, setShowBubbleChat] = useState(false);
  const [bubbleChatMessage, setBubbleChatMessage] = useState("");
  const [bubbleChatPosition, setBubbleChatPosition] = useState({ top: 0, left: 0 });
  const [joke, setJoke] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedCharacterId = localStorage.getItem('selectedCharacter');
    if (savedCharacterId) {
        const characterId = parseInt(savedCharacterId);
        if (characterId === 1) {
            setUserImage(boyImage);
        } else if (characterId === 2) {
            setUserImage(girlImage);
        }
    }
  }, []);

  useEffect(() => {
    const defaultLocation = "Makassar";
    fetch(`${api.base}weather?q=${defaultLocation}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  useEffect(() => {
    setLocalStorageValue("energy", energy);
  }, [energy]);

  useEffect(() => {
    setLocalStorageValue("money", money);
  }, [money]);

  useEffect(() => {
    setLocalStorageValue("affinity", affinity);
  }, [affinity]);

  useEffect(() => {
    // Fetch a joke when the component mounts
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch(jokeApiUrl)
      .then(response => response.json())
      .then(data => {
        setJoke(`${data.setup} ${data.punchline}`);
      })
      .catch(error => console.error('Error fetching joke:', error));
  };

  const handleCharacterClick = (event) => {
    const top = 20; // Adjust this value as needed
    const left = '50%'; // Position in the center horizontally
    setBubbleChatPosition({ top, left });
    setBubbleChatMessage(joke); // Set the joke as the bubble chat message
    setShowBubbleChat(!showBubbleChat);
  };

  return (
    <div className="kamar bg-cover bg-center h-screen w-screen relative flex flex-col justify-center">
      <StatusBarComponent name="statusBar" energy={energy} money={money} affinity={affinity} />
      <div className="weather-box w-[150px] h-[200px] bg-blue-300 shadow-lg rounded-xl m-auto relative px-10 py-2 top-[1%]">
        <div className="flex justify-between w-full">
          <div className="w-full my-2 mx-auto flex flex-col items-start">
            <div>
              {weather.weather && weather.main && (
                <>
                  <p className="text-sm font-bold">{weather.name}</p>
                  <p className="text-lg">{weather.main.temp} °C</p>
                  <p>{weather.weather[0].main}</p>
                  <p className="text-xs">{weather.weather[0].description}</p>
                  <div className="w-full my-2 mx-auto flex justify-center items-center">
                    <div className="weather-img">
                      <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt="Weather icon"
                        style={{ width: '50px', height: '50px' }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <img src={userImage} alt="My Image" style={{ width: '400px', height: 'auto', marginBottom:'-10px'}} onClick={handleCharacterClick} />
      </div>
      <div className="flex items-center justify-center bottom-10">
        {showBubbleChat && (<BubbleChat message={bubbleChatMessage} position="" style={bubbleChatPosition} />)}
      </div>
      <button className="phone-button absolute bottom-4 left-4 transition duration-300 hover:scale-105" onClick={() => setShowOptions(!showOptions)}>
        <img src={phoneImage} alt="Phone" style={{ width: '150px', height: 'auto' }} />
      </button>
      {showOptions && (
        <div className="options-box fixed top-[10%] left-[35%] w-[30%] h-[80%] p-4 shadow-lg rounded-xl bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 border-black border-solid border-4 flex flex-col items-center justify-center">
        <button className="close-button absolute top-2 right-2" onClick={() => setShowOptions(false)}>Close</button>
        <ul>
        <li>
        <button onClick={() => { setShowNews(true); setShowMovie(false); setShowCurrencyConverter(false); }} className="news-button transition duration-300 hover:scale-105">
        <img src={newsImage} alt="News" style={{ width: '100px', height: 'auto' }} />
        </button>
        </li>
        <li>
        <button onClick={() => { setShowMovie(true); setShowNews(false); setShowCurrencyConverter(false); }} className="movie-button transition duration-300 hover:scale-105">
        <img src={movieImage} alt="Movie" style={{ width: '100px', height: 'auto' }} />
        </button>
        </li>
        <li>
        <button onClick={() => { setShowCurrencyConverter(true); setShowNews(false); setShowMovie(false); }} className="currency-button transition duration-300 hover:scale-105">
        <img src={calculatorImage} alt="Calculator" style={{ width: '100px', height: 'auto' }} />
        </button>
        </li>
        <li>
        <button onClick={() => navigate('/components/about-us.jsx')} className="aboutus-button transition duration-300 hover:scale-105">
        < img src={aboutusImage} alt="About Us" style={{ width: '100px', height: 'auto', marginTop:'20px' }} />
        </button>
        </li>
        </ul>
        </div>
        )}
        {showNews && (
        <div className="show-box">
        <button className="close-button" onClick={() => setShowNews(false)}>Close</button>
        <DisplayNews />
        </div>
        )}
        {showMovie&& (
        <div className="show-box">
        <button className="close-button" onClick={() => setShowMovie(false)}>Close</button>
        <MovieContainer />
        </div>
        )}
        {showCurrencyConverter && (
        <div className="show-box">
        <button className="close-button" onClick={() => setShowCurrencyConverter(false)}>Close</button>
        <CurrencyConverter />
        </div>
        )}
        <button className="play-button transition duration-300 hover:scale-105 absolute bottom-4 right-4 md:bottom-8 md:right-8"
        onClick={() => navigate('/components/VisualNovel.jsx')}>
        <img src={playButton} alt="Play" style={{ width: '250px', height: 'auto' }} />
        </button>
        </div>
        );
        }
        
        const getLocalStorageValue = (key, defaultValue) => {
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
        };
        
        const setLocalStorageValue = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        };
        
        export default Home;
