import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import StatusBarComponent from "./statusbar.jsx";
import boyImage from './assets/boy.png';
import girlImage from './assets/girl.png';
import './home.css';

const api = {
  key: "02680ce7da7e47b02d1a4ebd7596513c",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
  const [weather, setWeather] = useState({});
  const [energy, setEnergy] = useState(() => getLocalStorageValue("energy", 50));
  const [money, setMoney] = useState(() => getLocalStorageValue("money", 100));
  const [affinity, setAffinity] = useState(() => getLocalStorageValue("affinity", 50));
  const [userImage, setUserImage] = useState(null); // Add userImage state
  const navigate = useNavigate();

  useEffect(() => {
    const savedCharacterId = localStorage.getItem('selectedCharacter');
    if (savedCharacterId) {
        const characterId = parseInt(savedCharacterId);
        console.log(characterId);
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

  return (
    <div className="kamar bg-cover bg-center h-[100vh] w-[100vw] relative">
      <StatusBarComponent name="statusBar" energy={energy} money={money} affinity={affinity} />
        <div className="weather-box w-[150px] h-[200px] bg-blue-300 shadow-lg rounded-xl m-auto relative px-10   py-2 top-[1%]">
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
        <div className="flex items-center justify-center h-[48vh]">
       <img src={userImage} alt="My Image" style={{ width: '400px', height: 'auto' }} />
      </div>
      <button
        className="play-button bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-10 rounded absolute bottom-4 right-4 md:bottom-8 md:right-8"
        onClick={() => navigate('/visual-novel')}
      >
        Play
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
