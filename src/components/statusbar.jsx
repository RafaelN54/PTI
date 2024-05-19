import React from "react";
import { FaBatteryFull, FaMoneyBillAlt, FaHeart } from 'react-icons/fa';

function StatusBarComponent({ energy, money, afinity }) {
    const energyBar = energy * 2.06;
    const moneyBar = money * 2.06;
    const afinityBar = afinity * 2.06;

    return (
        <div className="flex justify-between p-4">
            <div className="flex items-center h-12 ml-5">
                <FaBatteryFull className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-blue-300 rounded" style={{ width: `${energyBar}px` }}>Energy: {energy}</div>
                </div>
            </div>
            <div className="flex items-center h-12">
                <FaMoneyBillAlt className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-green-500 rounded" style={{ width: `${moneyBar}px` }}>Money: {money}</div>
                </div>
            </div>
            <div className="flex items-center h-12 mr-5">
                <FaHeart className="mr-2" /> {/* Icon */}
                <div className="w-52 h-[22.5px] bg-white border border-black rounded">
                    <div className="h-[21px] bg-yellow-300 rounded" style={{ width: `${afinityBar}px` }}>Afinity: {afinity}</div>
                </div>
            </div>
        </div>
    );
}

export default StatusBarComponent;
