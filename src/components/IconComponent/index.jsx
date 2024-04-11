import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const iconNames = Object.keys(fas);

const IconComponent = () => {
  const [randomIcon, setRandomIcon] = useState(null);

  const handleButtonClick = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * iconNames.length);
      setRandomIcon(fas[iconNames[randomIndex]]);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className='button-random-icon'>
        Show random icon
      </button>
      <div className='icon-container'>
        {randomIcon && (
          <FontAwesomeIcon icon={randomIcon} size="3x" />
        )}
      </div>
    </div>
  );
};

export default IconComponent;
