import React, { useState, useEffect } from "react";
import Dialog from "./dialog.jsx";
import StatusBarComponent from "./statusbar.jsx";
import Pilihan1 from "./pilihan1.jsx";
import boyImage from './assets/boy.png';
import girlImage from './assets/girl.png';
import friendImage from './assets/friend.png';
import penginapanImage from './assets/penginapan.jpg';
import bandaraImage from './assets/bandara.png';
import biraImage from './assets/bira.jpg';
import kakilimaImage from './assets/kakilima.jpg';
import losariImage from './assets/losari.jpg';
import tokooleh2Image from './assets/oleh2.jpg';
import restoran2Image from './assets/restoran2.jpg';
import rotterdamImage from './assets/rotterdam.jpg';
import palumaraImage from './assets/palumara.jpg';
import palumaraAbisImage from './assets/palumaraafter.png';
import pisangepeImage from './assets/pisangepe.jpg';
import pisangijoImage from './assets/pisangijo.jpg';
import cotomakassarImage from './assets/cotomakassar.jpg';
import cotomakassarAbisImage from './assets/cotomakassarafter.png';
import pagiImage from './assets/pagi.png';
import siangImage from './assets/siang.png';
import soreImage from './assets/sore.png';
import malamImage from './assets/malam.png';
import './bg.css';

function VisualNovel(){
    const [counterIndex, setCounterIndex] = useState(0);
    const [charName, setCharName] = useState("Mikayla");
    const [username, setUsername] = useState("");
    const [backgroundIndex, setBackgroundIndex] = useState(bandaraImage);
    const [foodImage, setFoodImage] = useState(null);
    const [timeImage, setTimeImage] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [friendBrightness, setFriendBrightness] = useState(100);
    const [userBrightness, setUserBrightness] = useState(50);
    const [isGameEnded, setIsGameEnded] = useState(false);

    const arrayfriend = [0, 1, 3, 5, 7, 8, 9, 10, 11, 15, 17, 19, 22, 24, 27, 29, 34, 37, 39, 40, 41, 43, 45, 47, 49, 51, 56, 58, 59, 63, 64, 67, 68, 71, 73, 75, 77, 78, 81, 83, 86, 88, 90, 94, 96, 98, 99, 102, 103, 104, 107, 109, 110, 112, 113, 115, 116, 119, 120, 122, 123, 125, 127, 128, 131, 132, 134];
    const arrayuser = [2, 4, 6, 12, 16, 18, 21, 23, 26, 28, 30, 32, 33, 35, 38, 42, 44, 46, 48, 55, 57, 60, 61, 62, 65, 66, 70, 74, 76, 79, 80, 82, 84, 85, 87, 92, 95, 97, 100, 101, 105, 106, 108, 111, 114, 118, 121, 126, 129, 130, 133, 135, 136, 137, 138];
    const arraynarator =[13, 14, 20, 25, 31, 36, 53, 139, 140, 141, 142, 143, 144];
    const arrayrestoran = [50, 52, 54, 69, 72, 89, 91, 93, 117, 124];
   
    const [waktu, setWaktu] = useState(1);
    const [time, setTime] = useState("Pagi");
    const [hasVisitedMakan, setHasVisitedMakan] = useState(1);
    const [hasVisitedWisata, setHasVisitedWisata] = useState(1);

    const [energy, setEnergy] = useState(() => parseInt(localStorage.getItem('energy')) || 50);
    const [money, setMoney] = useState(() => parseInt(localStorage.getItem('money')) || 100);
    const [affinity, setAffinity] = useState(() => parseInt(localStorage.getItem('affinity')) || 50);
    const goHome = () => {
        setCounterIndex(0);
        setBackgroundIndex(bandaraImage);
        setWaktu(1);
        setHasVisitedMakan(1);
        setHasVisitedWisata(1);
        setEnergy(50);
        setMoney(100);
        setAffinity(50);
        setTime("Pagi");
        setIsGameEnded(false);
        window.location.href = '/components/home.jsx';
    };
    
    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }

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
        localStorage.setItem('energy', energy);
        localStorage.setItem('money', money);
        localStorage.setItem('affinity', affinity);
    }, [energy, money, affinity]);

    useEffect(() => {
        // Update time image based on the time of day
        switch (time) {
            case "Pagi":
                setTimeImage(pagiImage);
                break;
            case "Siang":
                setTimeImage(siangImage);
                break;
            case "Sore":
                setTimeImage(soreImage);
                break;
            case "Malam":
                setTimeImage(malamImage);
                break;
            default:
                setTimeImage(null);
        }
    }, [time]);

    const handleCharacterName = (index) => {
        if (arrayfriend.includes(index)){
            setCharName("Mikayla");
        } else if (arrayuser.includes(index)){
            setCharName(username || "Guest");
        } else if (arraynarator.includes(index)){
            setCharName("Narator");
        } else if (arrayrestoran.includes(index)){
            setCharName("Pelayan");
        }
    }

    const handleCharacterBrightness = (index) => {
        if (arrayfriend.includes(index)) {
            setFriendBrightness(100);
            setUserBrightness(50);
        } else if (arrayuser.includes(index)) {
            setFriendBrightness(50);
            setUserBrightness(100);
        } else if (arraynarator.includes(index)) {
            setFriendBrightness(50);
            setUserBrightness(50);
        } else {
            // Other cases where brightness might change
        }
    }

    const updateBackgroundAndCounters = (newCounterIndex, newBackground, newCounterValue) => {
        setCounterIndex(newCounterIndex);
        setBackgroundIndex(newBackground);
        setCounterValue(newCounterValue);
    }

    const increaseCounter = () => {
        let newCounterIndex = counterIndex+1;
        let newBackground = backgroundIndex;
        let newCounterValue = counterIndex;

        if (counterIndex === 2 || counterIndex === 9 || counterIndex === 10 || counterIndex === 11){
            newCounterIndex = 140;
            newCounterValue = 139;

        } else if (counterIndex === 15 || counterIndex === 21 || counterIndex === 33 || counterIndex === 39 || counterIndex === 48 || counterIndex === 68 || counterIndex === 87 || counterIndex === 113 || counterIndex === 136) {
            if(waktu === 1 || waktu === 5 || waktu === 9){
                newCounterIndex = 11;
                newCounterValue = 10;
                setTime("Sore");
            } else if (waktu === 2 || waktu === 6){
                newCounterIndex = 12;
                newBackground = penginapanImage;
                newCounterValue = 11;
                setTime("Malam");
            } else if (waktu === 4 || waktu === 8){
                newCounterIndex = 10;
                newCounterValue = 9;
                setTime("Siang");
            } else if (waktu === 10){
                newCounterIndex = 137;
                newCounterValue = 136;
                setTime("Sore");
            }
            setWaktu(waktu+1);

        } else if (counterIndex === 4) {
            if(hasVisitedMakan === 1) {
                newCounterIndex = 49;
                newBackground = restoran2Image;
                newCounterValue = 48;
                setHasVisitedMakan(hasVisitedMakan+1);
            } else if (hasVisitedMakan === 2) {
                newCounterIndex = 69;
                newBackground = restoran2Image;
                newCounterValue = 68;
                setHasVisitedMakan(hasVisitedMakan+1);
            } else if (hasVisitedMakan === 3) {
                newCounterIndex = 88;
                newBackground = restoran2Image;
                newCounterValue = 87;
                setHasVisitedMakan(hasVisitedMakan+1);
            } else if (hasVisitedMakan === 4) {
                newCounterIndex = 114;
                newBackground = kakilimaImage;
                newCounterValue = 113;
                setHasVisitedMakan(hasVisitedMakan+1);
            }

        } else if (counterIndex === 6){
            if (hasVisitedWisata === 1) {
                newCounterIndex = 16;
                newBackground = rotterdamImage;
                newCounterValue = 15;
                setHasVisitedWisata(hasVisitedWisata+1);
            } else if (hasVisitedWisata === 2) {
                newCounterIndex = 22;
                newBackground = losariImage;
                newCounterValue = 21;
                setHasVisitedWisata(hasVisitedWisata+1);
            } else if (hasVisitedWisata === 3) {
                newCounterIndex = 34;
                newBackground = biraImage;
                newCounterValue = 33;
                setHasVisitedWisata(hasVisitedWisata+1);
            } else if (hasVisitedWisata === 4){
                newCounterIndex = 40;
                newBackground = tokooleh2Image;
                newCounterValue = 39;
                setHasVisitedWisata(hasVisitedWisata+1);
            }

        } else if (counterIndex === 13){
            newCounterIndex = 9;
            newCounterValue = 8;
            setTime("Pagi");
            setWaktu(waktu+1);

        } else if (counterIndex === 8){
            newCounterIndex = 14;
            newBackground = penginapanImage;
            newCounterValue = 13;

        } else if (counterIndex === 139){
            if (energy === 0){
                newCounterIndex = 141;
                newCounterValue = 140;
            } else if (money === 0){
                newCounterIndex = 142;
                newCounterValue = 141;
            } else if (affinity === 0){
                newCounterIndex = 143;
                newCounterValue = 142;
            } else {
                newCounterIndex = 144;
                newCounterValue = 143;
            }
            setIsGameEnded(true);
        }

        setCounterIndex(newCounterIndex);
        setBackgroundIndex(newBackground);
        
        if(counterIndex === 1){
            setBackgroundIndex(penginapanImage);
            setTime("Siang");
        } else if (counterIndex === 137){
            setBackgroundIndex(bandaraImage);
        }
        

        if(counterIndex === 54){
            setFoodImage(cotomakassarImage);
        } else if (counterIndex === 66){
            setFoodImage(cotomakassarAbisImage);
        } else if (counterIndex === 72){
            setFoodImage(pisangijoImage);
        } else if (counterIndex === 93){
            setFoodImage(palumaraImage);
        } else if (counterIndex === 108){
            setFoodImage(palumaraAbisImage);
        } else if (counterIndex === 124){
            setFoodImage(pisangepeImage);
        }
        handleCharacterBrightness(newCounterValue);
        handleCharacterName(newCounterValue);
    }

    const memilih = (index, username, energyTambahan, uangTambahan, affinitasTambahan) => {
        setCounterIndex(index);
        setCharName(username);
        setEnergy(energy+energyTambahan > 100? 100 : (energy+energyTambahan < 0? 0 : (energy+energyTambahan)));
        setMoney(money+uangTambahan > 100? 100 : (money+uangTambahan < 0? 0 : (money+uangTambahan)));
        setAffinity(affinity+affinitasTambahan > 100? 100 : (affinity+affinitasTambahan < 0? 0 : (affinity+affinitasTambahan)));
    }


    return (
        <div className="resto bg-cover" style={{ backgroundImage: `url(${backgroundIndex})` }}>
            <StatusBarComponent name="statusBar" energy={energy} money={money} affinity={affinity} />
            {([55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135].includes(counterIndex)) && (
                <img src={foodImage} className="gbr" />
            )}
            {timeImage && (
                <img src={timeImage} alt="Time Image" className="fixed bottom-[550px] right-[1440px] w-[80px] z-10 transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100" />
            )}
            <div className="fixed bottom-[30px] w-full flex justify-between items-end">
                <img src={userImage} alt="My Image" className="dialog-user" style={{ filter: `brightness(${userBrightness}%)` }} />
                <img src={friendImage} alt="Friendly Image" className="dialog-friend" style={{marginRight: '150px', filter: `brightness(${friendBrightness}%)` }} />
            </div>
            <div className="fixed bottom-[90px] w-full flex flex-col items-center">
                <div className="bg-white w-[200px] opacity-80 rounded-t-lg p-1 text-center">
                    <h1 className="font-cursive">{charName}</h1>
                </div>
                <div className="dialog-box bg-pink-300 opacity-90 p-4 rounded-lg shadow-lg ">
                    <p className="font-cursive font-bold">{Dialog[counterIndex]}</p>
                    <button
                        className="next float-right mt-2 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={increaseCounter}
                        disabled={[140, 141, 142, 143, 144].includes(counterIndex)}>Next</button>
                        </div>
                    </div>
                    {([140, 141, 142, 143, 144].includes(counterIndex) && isGameEnded) && (
                        <div className="center-button-container" style={{ textAlign: 'center', marginTop: '13%' }}>
                            <button className="custom-button-ending" onClick={goHome}>Go Back Home</button>
                        </div>
                    )}
                {counterIndex === 140 && <Pilihan1 memilih={memilih} makan={hasVisitedMakan} wisata={hasVisitedWisata} username={username} />}
                </div>
            );
}

export default VisualNovel;
