import React, { useState, useEffect } from "react";
import Dialog from "./dialog.jsx";
import StatusBarComponent from "./statusbar.jsx";
import Pilihan1 from "./pilihan1.jsx";
import boyImage from './assets/boy.png';
import girlImage from './assets/girl.png';
import friendImage from './assets/friend.png';
import restoImage from './assets/resto.png';
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

    const arrayfriend = [0, 1, 3, 5, 7, 8, 9, 10, 11, 15, 17, 19, 22, 24, 27, 29, 34, 37, 39, 40, 41, 43, 45, 47, 49, 51, 56, 58, 59, 63, 64, 67, 68, 71, 73, 75, 77, 78, 81, 83, 86, 88, 90, 94, 96, 98, 99, 102, 103, 104, 107, 109, 110, 112, 113, 115, 116, 119, 120, 122, 123, 125, 127, 128, 131, 132, 134];
    const arrayuser = [2, 4, 6, 12, 16, 18, 21, 23, 26, 28, 30, 32, 33, 35, 38, 42, 44, 46, 48, 55, 57, 60, 61, 62, 65, 66, 70, 74, 76, 79, 80, 82, 84, 85, 87, 92, 95, 97, 100, 101, 105, 106, 108, 111, 114, 118, 121, 126, 129, 130, 133, 135, 136, 137, 138];
    const arraynarator =[13, 14, 20, 25, 31, 36, 53, 139, 140, 141, 142, 143, 144];
    const arrayrestoran = [50, 52, 54, 69, 72, 89, 91, 93, 117, 124];
   
    const [waktu, setWaktu] = useState(1);
    const [time, setTime] = useState("Pagi");
    const [hasVisitedMakan, setHasVisitedMakan] = useState(1);
    const [hasVisitedWisata, setHasVisitedWisata] = useState(1);

    const [energy, setEnergy] = useState(50);
    const [money, setMoney] = useState(100);
    const [afinity, setAfinity] = useState(50);
    
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
                newBackground = restoImage;
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
            newBackground = restoImage;
            newCounterValue = 13;

        } else if (counterIndex === 139){
            if (energy === 0){
                newCounterIndex = 141;
                newCounterValue = 140;
            } else if (money === 0){
                newCounterIndex = 142;
                newCounterValue = 141;
            } else if (afinity === 0){
                newCounterIndex = 143;
                newCounterValue = 142;
            } else {
                newCounterIndex = 144;
                newCounterValue = 143;
            }
        }

        setCounterIndex(newCounterIndex);
        setBackgroundIndex(newBackground);
        
        if(counterIndex === 1){
            setBackgroundIndex(restoImage);
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

        handleCharacterName(newCounterValue);
    }

    const memilih = (index, username, energyTambahan, uangTambahan, afinitasTambahan) => {
        setCounterIndex(index);
        setCharName(username);
        setEnergy(energy+energyTambahan > 100? 100 : (energy+energyTambahan < 0? 0 : (energy+energyTambahan)));
        setMoney(money+uangTambahan > 100? 100 : (money+uangTambahan < 0? 0 : (money+uangTambahan)));
        setAfinity(afinity+afinitasTambahan > 100? 100 : (afinity+afinitasTambahan < 0? 0 : (afinity+afinitasTambahan)));
    }


    return (
        <div className="resto" style={{ backgroundImage: `url(${backgroundIndex})` }}>
            <StatusBarComponent name="statusBar" energy={energy} money={money} afinity={afinity} />
            {counterIndex === 140 && <Pilihan1 memilih={memilih} makan={hasVisitedMakan} wisata={hasVisitedWisata} username={username} />}
            {([55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135].includes(counterIndex)) && <img src={foodImage} style={{ position: 'fixed', bottom: '300px', right: '400px', width: '300px', height: 'auto', borderRadius: '40px' }} />}
            {timeImage && <img src={timeImage} alt="Time Image" style={{ position: 'fixed', bottom: '550px', right: '1440px', width: '80px', zIndex: '10' }} />}
            <div style={{ position: 'fixed', bottom: "30px", width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>    
                <img src={userImage} alt="My Image" style={{ width: '400px', height: 'auto' }} />
                <img src={friendImage} alt="Friendly Image" style={{width: '270px', height: 'auto', marginRight: '150px'}} />
            </div>
            <div style={{ position: 'fixed', bottom: "100px", width: '100%' }}>
                <div style={{height:'40px', marginBottom:'-16px', backgroundColor:'white', width:'120px', opacity:'80%'}}>
                    <h2 style={{ fontFamily: 'cursive' }}>{charName}</h2>
                </div>
                <div style={{ backgroundColor: 'pink', opacity: '90%', width: '1521px', height: '134px' }}>
                    <p style={{ fontFamily: 'cursive', fontWeight: 'bold'  }}>{Dialog[counterIndex]}</p>
                    <button className="next" style={{ textAlign: 'right' }} onClick={increaseCounter} disabled={counterIndex === 140 || counterIndex === 141 || counterIndex === 142 || counterIndex === 143 || counterIndex === 144}>Next</button>
                </div>
            </div>
        </div>
    );
    
}

export default VisualNovel;
