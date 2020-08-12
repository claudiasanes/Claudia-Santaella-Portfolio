import React, { useState } from 'react';
import '../App.css';

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Character({ children }) {
  const [style, setStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);

  const onMouseEnter = (character) => {
    if (!isMoving) {
      const duration = getRandom(1000, 1200);
      setStyle({
        top: `${getRandom(-50, 50)}px`,
        left: `${getRandom(-50, 50)}vw`,
        transition: `color 0s ease, top ${duration}ms ease, left ${duration}ms ease`,
      });
      setIsMoving(true);
      setTimeout(() => {
        setStyle({});
        setIsMoving(false);
      }, duration);
    }
  };

  return (
    <div
      onMouseEnter={() => onMouseEnter(children)}
      onFocus={() => onMouseEnter(children)}
      style={style}
      className="character"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

export default Character;
