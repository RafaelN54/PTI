import React, { useState, useEffect } from 'react';
import './pickchar.css';
import boyImage from './assets/boy.png';
import girlImage from './assets/girl.png';

function PickChar() {
  const [name, changeName] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(undefined); // Initially set to undefined
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const characters = [
    { id: 1, name: 'Boy', imageSrc: boyImage },
    { id: 2, name: 'Girl', imageSrc: girlImage }
  ];

  useEffect(() => {
    localStorage.setItem('username', name);
  }, [name]);

  useEffect(() => {
    const savedName = localStorage.getItem('username');
    const savedCharacterId = localStorage.getItem('selectedCharacter');
    if (savedName) {
      changeName(savedName);
    }
    if (savedCharacterId) {
      const character = characters.find(char => char.id === parseInt(savedCharacterId));
      setSelectedCharacter(character);
    }
  }, []);

  useEffect(() => {
    if (selectedCharacter && name.trim() !== "" && name.length <= 10) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [selectedCharacter, name]);

  const selectCharacter = (character) => {
    setSelectedCharacter(character);
    localStorage.setItem('selectedCharacter', character.id);
  };

  function handleChange(event) {
    const inputName = event.target.value;
    if (inputName.length <= 10) {
      changeName(inputName);
    }
  }

  function showName(event) {
    event.preventDefault();
    if (name.length <= 10) {
      window.location.href = '/components/VisualNovel.jsx';
    }
  }

  return (
    <div className='pickcharpage p-8'>
      <h1 className='text-2xl font-bold mb-4'>Pick your Character</h1>

      {/* Character Selection */}
      <div className="character-container flex space-x-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character cursor-pointer ${selectedCharacter && selectedCharacter.id === character.id ? 'selected' : 'unselected'}`}
            onClick={() => selectCharacter(character)}
          >
            <img
              src={character.imageSrc}
              alt={character.name}
              className='w-54 h-96 mr-2'
            />
            <p className='text-center'>{character.name}</p>
          </div>
        ))}
      </div>

      {/* Form for naming character */}
      <div className="name-form margin-top: 200px;">
        <h3 className='text-xl font-semibold mb-2'>Name Your Character</h3>
        <form onSubmit={showName} className='flex flex-col space-y-2'>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={name}
            className='border rounded px-2 py-1'
          />
          <button 
            type="submit" 
            disabled={submitButtonDisabled} 
            className={`px-4 py-2 rounded ${submitButtonDisabled ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PickChar;
