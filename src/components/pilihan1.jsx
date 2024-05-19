import React, { useState } from 'react';
import './button.css';

function Pilihan1({memilih, makan, wisata, username}) {
    
    function handleKuliner(){
        memilih(3, username, 10, -10, 10);
    }

    function handleWisata(){
        memilih(5, username, -20, -20, 25);
    }

    function handleIstirahat(){
        memilih(7, username, 25, 0, -25);
    }

    return(
        <div className='pilihan' style={{ textAlign: 'center', marginTop: '6%' }}> 
            <div><button onClick={handleKuliner} disabled={makan == 5} className="custom-button">Wisata Kuliner</button></div>
            <div><button onClick={handleWisata} disabled={wisata == 5} className="custom-button">Pergi ke Tempat Wisata</button></div>
            <div><button onClick={handleIstirahat} className="custom-button">Istirahat di Hotel</button></div>
        </div>
    );
}

export default Pilihan1;
