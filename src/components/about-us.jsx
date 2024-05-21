import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import peliImage from './assets/peli.jpg';
import mekelImage from './assets/mekel.jpg';
import rapImage from './assets/rap.jpg';
import kellenImage from './assets/kellen.jpeg';
import igImage from './assets/ig.png';
import linkedinImage from './assets/linkedin.png';
import logoImage from './assets/logo.png';

const AboutUs = () => {
  // Array of data for each card
  const cardData = [
    {
      name: "Felicia Sabatini Gunawan",
      role: "React Developer",
      twitterColor: "#1DA1F2",
      behanceColor: "#131418",
      linkedinColor: "#0077b5",
      color: "#F59E0B",
      image: peliImage,
      linkedinLink: "https://www.linkedin.com/in/felicia-sabatini-gunawan/",
      igLink: "https://www.instagram.com/feliciasabatinigunawan/"
    },
    {
      name: "Rafael Natanael",
      role: "UI/UX Designer",
      twitterColor: "#1DA1F2",
      behanceColor: "#131418",
      linkedinColor: "#0077b5",
      color: "#EF4444",
      image: rapImage,
      linkedinLink: "https://www.linkedin.com/in/rafael-natanael/",
      igLink: "https://www.instagram.com/rafaelnatanael/"
    },
    {
      name: "Michael Elbert Justian",
      role: "Frontend Developer",
      twitterColor: "#1DA1F2",
      behanceColor: "#131418",
      linkedinColor: "#0077b5",
      color: "#10B981",
      image: mekelImage,
      linkedinLink: "https://www.linkedin.com/in/michael-elbert-justian/",
      igLink: "https://www.instagram.com/michaelelbertjustian/"
    },
    {
      name: "Kellen Valerie",
      role: "Graphic Designer",
      twitterColor: "#1DA1F2",
      behanceColor: "#131418",
      linkedinColor: "#0077b5",
      color: "white",
      image: kellenImage,
      linkedinLink: "https://www.linkedin.com/in/kellen-valerie/",
      igLink: "https://www.instagram.com/kellenvalerie/"
    },
  ];

  return (
    <div className="bg-blue-200 h-screen flex items-center justify-center">
      <div className="absolute top-0 w-full flex items-center justify-center">
        <h1 className="text-white text-6xl font-semibold">About Xiomay</h1>   
        <img src={logoImage} alt="About Xiomay" className="w-32 h-32" />
      </div>
      {cardData.map((data, index) => (
        <div key={index} className={`w-[300px] h-[500px] bg-white rounded-lg overflow-hidden shadow-md mr-6`} style={{ backgroundColor: data.color }}>
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
              <a href={data.linkedinLink} target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }}>
                <span className="mx-2 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[{data.linkedinColor}]"
                      style={{ transformOrigin: "center", display: "inline-block" }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
                  <img src={linkedinImage} alt="LinkedIn" className="w-10 h-10" />
                </span>
              </a>
              <a href={data.igLink} target="_blank" rel="noopener noreferrer" style={{ transition: "transform 0.3s" }}>
                <span className="mx-2 w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[{data.instagramColor}]"
                      style={{ transformOrigin: "center", display: "inline-block" }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
                  <img src={igImage} alt="Instagram" className="w-10 h-10" />
                </span>
              </a>
            </div>
          </div>
          <Link to="/components/home.jsx" className="custom-button transition duration-300 hover:scale-105 absolute bottom-4 right-4 md:bottom-8 md:right-8"> Go to Home </Link>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
