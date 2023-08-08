import  { useState, useEffect } from 'react';

const colors = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Green', code: '#00FF00' },
  { name: 'Yellow', code: '#FFFF00' },
  { name: 'Purple', code: '#800080' },
  { name: 'Orange', code: '#FFA500' },
  { name: 'Pink', code: '#FFC0CB' },
];

const GamePage = () => {
  const [correctColor, setCorrectColor] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const generateOptions = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const correctColorData = colors[randomIndex];
    setCorrectColor(correctColorData);

    const otherOptions = colors
      .filter((color) => color.name !== correctColorData.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    setOptions([...otherOptions.map((color) => color.name), correctColorData.name].sort(() => Math.random() - 0.5));
  };

  const handleOptionClick = (colorName) => {
    if (colorName === correctColor.name) {
      setScore(score + 1);
    }
    generateOptions();
  };

  useEffect(() => {
    generateOptions();
  }, []);

  return (
    <div className ='game' >
      <h1 className='heading'><span className='red'>C</span><span className='blue'>O</span><span className='yellow'>L</span><span className='pink'>O</span><span className='brown'>U</span><span className='green'>R</span> Guessing Game</h1>
      <p className='score'>Score: {score}</p>
      <div className="color-display" style={{ backgroundColor: correctColor.code, width: '200px', height: '200px' }}></div>
      <p className='square'> what is the color of the Square?</p>
      <div className="options">
        {options.map((color, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(color)}
            className='btn'
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GamePage;

