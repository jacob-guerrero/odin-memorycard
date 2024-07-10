import { useState, useEffect } from "react";

function Card(props) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClickCard = () => {
    if (!wasClicked) {
      setWasClicked(true);
      props.incrementScore();
    } else {
      props.changeBestScore();
    }
    props.shuffle();
  };

  useEffect(() => {
    if (props.resetCards) {
      setWasClicked(false);
    }
  }, [props.resetCards]);

  return (
    <div className="card" onClick={() => handleClickCard()}>
      <div className="card-img">
        <img className="card-img-content" src={props.url} alt={props.name} />
      </div>
      <p className="card-text">{props.name}</p>
    </div>
  );
}

export default Card;
