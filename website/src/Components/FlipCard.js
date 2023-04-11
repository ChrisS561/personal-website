import React, { useState } from 'react';
import "./ComponentCSS/FlipCard.css";

function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseOver = () => {
    setIsFlipped(true);
  };

  const handleMouseOut = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flip-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="flip-card-back">
          <h3>{props.backTitle}</h3>
          <p>{props.backDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
