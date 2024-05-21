import React from "react";
import { FaBatteryFull, FaMoneyBillAlt, FaHeart } from 'react-icons/fa';
import './bg.css'; // Import your custom CSS

function StatusBarComponent({ energy, money, affinity }) {
    const energyBar = energy * 2.06;
    const moneyBar = money * 2.06;
    const affinityBar = affinity * 2.06;

    return (
        <div className="status flex justify-between p-4">
            <div className="bar flex items-center h-12">
                <FaBatteryFull className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-blue-300 rounded" style={{ width: `${energyBar}px` }}>Energy:{energy}</div>
                </div>
            </div>
            <div className="bar flex items-center h-12">
                <FaMoneyBillAlt className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-green-500 rounded" style={{ width: `${moneyBar}px` }}>Money:{money}</div>
                </div>
            </div>
            <div className="bar flex items-center h-12 mr-5">
                <FaHeart className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-yellow-300 rounded" style={{ width: `${affinityBar}px` }}>Affinity:{affinity}</div>
                </div>
            </div>  
        </div>
    );
}

export default StatusBarComponent;
