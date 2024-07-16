function Score(props) {
  return (
    <div className="header-right" translate="no">
      <p className="score">Score: {props.currentScore}</p>
      <p className="score">Best Score: {props.bestScore}</p>
    </div>
  );
}

export default Score;
