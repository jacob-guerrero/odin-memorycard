import { useState, useEffect } from "react";
import cardBackImg from '../assets/back-card.png';

function Card(props) {
  const [wasClicked, setWasClicked] = useState(false);
  
  const handleClickCard = () => {
    if (!wasClicked) {
      setWasClicked(true);
      props.incrementScore();
    } else {
      props.changeBestScore();
    }
    props.flipCards();
  };

  useEffect(() => {
    if (props.resetCards) {
      setWasClicked(false);
    }
  }, [props.resetCards]);

  return (
    <div className={`flip-card ${(props.allFlipped) ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="card" onClick={() => handleClickCard()}>
          <div className="card-img">
            <img className="card-img-content" src={props.url} alt={props.name} />
          </div>
          <p className="card-text">{props.name}</p>
        </div>

        <div className="card-back">
          <img className="card-back-img" src={cardBackImg} />
        </div>
      </div>
    </div>
  );
}

export default Card;
