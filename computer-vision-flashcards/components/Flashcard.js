import { useState } from 'react';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
      onClick={flipCard}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3 className="flashcard-title">{card.title}</h3>
          <p className="flashcard-question">{card.question}</p>
          <p className="flashcard-hint">(Click to reveal answer)</p>
        </div>
        <div className="flashcard-back">
          <h3 className="flashcard-title">{card.title}</h3>
          <p className="flashcard-answer">{card.answer}</p>
          <p className="flashcard-hint">(Click to see question)</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;