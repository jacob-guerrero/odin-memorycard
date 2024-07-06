import { useState } from "react";
import "./styles/App.css";
import Title from "./components/Title";
import Score from "./components/Score";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const content = [
    { id: "One", name: "One", url: "https://cdn2.thecatapi.com/images/a0d.jpg" },
    { id: "Two", name: "Two", url: "https://cdn2.thecatapi.com/images/a5u.jpg" },
    { id: "Three", name: "Three", url: "https://cdn2.thecatapi.com/images/adf.jpg" },
    { id: "Four", name: "Four", url: "https://cdn2.thecatapi.com/images/b37.jpg" },
  ];

  const changeBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  };

  return (
    <>
      <header>
        <Title titleName="The Memory Game!"></Title>
        <Score currentScore={score} bestScore={bestScore}></Score>
      </header>

      <main>
        {content.map((card, index) => (
          <Card key={index} name={card.id} url={card.url}></Card>
        ))}
      </main>

      <button onClick={() => setScore((score) => score + 1)}>
        Score is {score}
      </button>
      <button onClick={changeBestScore}>Set Score</button>
    </>
  );
}

export default App;
