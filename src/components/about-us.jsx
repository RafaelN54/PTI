import React from "react";
import { Link } from "react-router-dom";
import peliImage from './assets/peli.jpg';
import mekelImage from './assets/mekel.jpg';
import rapImage from './assets/rap.jpg';
import kellenImage from './assets/kellen.jpeg';
import igImage from './assets/ig.png';
import linkedinImage from './assets/linkedin.png';
import logoImage from './assets/logo.png';

const AboutUs = () => {
  const cardData = [
    {
      name: "Felicia Sabatini Gunawan",
      role: "React Developer",
      linkedinColor: "#0077b5",
      color: "#F59E0B",
      image: peliImage,
      linkedinLink: "https://www.linkedin.com/in/felicia-sabatini-gunawan/",
      igLink: "https://www.instagram.com/feliciasabatinigunawan/"
    },
    {
      name: "Rafael Natanael",
      role: "UI/UX Designer",
      linkedinColor: "#0077b5",
      color: "#EF4444",
      image: rapImage,
      linkedinLink: "https://www.linkedin.com/in/rafael-natanael/",
      igLink: "https://www.instagram.com/rafaelnatanael/"
    },
    {
      name: "Michael Elbert Justian",
      role: "Frontend Developer",
      linkedinColor: "#0077b5",
      color: "#10B981",
      image: mekelImage,
      linkedinLink: "https://www.linkedin.com/in/michael-elbert-justian/",
      igLink: "https://www.instagram.com/michaelelbertjustian/"
    },
    {
      name: "Kellen Valerie",
      role: "Graphic Designer",
      linkedinColor: "#0077b5",
      color: "white",
      image: kellenImage,
      linkedinLink: "https://www.linkedin.com/in/kellen-valerie/",
      igLink: "https://www.instagram.com/kellenvalerie/"
    },
  ];

  return (
    <div className="background-main flex flex-col items-center relative">
      <div className="absolute top-5 w-full flex flex-col items-center justify-center md:flex-row md:justify-between p-4">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">About Xiomay</h1>
        <img src={logoImage} alt="About Xiomay" className="w-24 h-24" />
      </div>
      <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-40 md:mt-32 w-full px-4">
        {cardData.map((data, index) => (
          <div key={index} className="card w-[300px] h-[500px] bg-white rounded-lg overflow-hidden shadow-md ml-10 m-4" style={{ backgroundColor: data.color }}>
            <div className="w-full h-[160px] bg-red-700 flex items-center justify-center relative">
              <div className="w-[100px] h-[100px] rounded-full bg-white relative overflow-hidden">
                <img src={data.image} alt="user" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="py-10 px-6 grid grid-cols-1 gap-6">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-semibold text-red-800 text-center">{data.name}</h3>
                <p className="font-semibold text-gray-700">{data.role}</p>
              </div>
              <div className="flex items-center justify-center">
                <a href={data.linkedinLink} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">
                  <span className="mx-2 w-[40px] h-[30px] rounded-full flex items-center justify-center" style={{ backgroundColor: data.linkedinColor }}>
                    <img src={linkedinImage} alt="LinkedIn" className="w-10 h-10" />
                  </span>
                </a>
                <a href={data.igLink} target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-105">
                  <span className="mx-2 w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <img src={igImage} alt="Instagram" className="w-10 h-10" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-8 md:right-12">
        <Link to="/components/home.jsx" className="custom-button transition-transform transform hover:scale-105">Go to Home</Link>
      </div>
    </div>
  );
}

export default AboutUs;
