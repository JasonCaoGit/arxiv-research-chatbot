import { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardDeck = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flashcard-deck">
      <div className="flashcard-container">
        <Flashcard card={cards[currentCardIndex]} />
      </div>
      <div className="navigation-controls">
        <button className="nav-button" onClick={prevCard}>
          Previous
        </button>
        <span className="card-counter">
          {currentCardIndex + 1} / {cards.length}
        </span>
        <button className="nav-button" onClick={nextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardDeck;