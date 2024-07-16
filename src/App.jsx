import { useState, useEffect } from "react";
import "./styles/App.css";
import Title from "./components/Title";
import Score from "./components/Score";
import Card from "./components/Card";
import ConfettiExplosion from "./components/Confetti";
import Footer from "./components/Footer";

/* const content = [
  { id: "One", name: "One", url: "https://cdn2.thecatapi.com/images/a0d.jpg" },
  { id: "Two", name: "Two", url: "https://cdn2.thecatapi.com/images/a5u.jpg" },
  { id: "Three", name: "Three", url: "https://cdn2.thecatapi.com/images/adf.jpg" },
  { id: "Four", name: "Four", url: "https://cdn2.thecatapi.com/images/b37.jpg" },
]; */

const catNames = [
  "Hestu",
  "Koga",
  "Impa",
  "Deku",
  "Zora",
  "Mipha Grace",
  "Hyrule",
  "Castle",
  "Ultra",
  "Peter Parker",
  "Fury",
  "Deadpool",
  "Bakshi",
  "Whiplash",
  "Flounder",
  "Eric",
  "Ursula",
  "Ariel",
  "Scuttle",
  "Maple Syrup",
  "Pastrami",
  "Calzone",
  "Burrata",
  "Boursin",
  "Provolone",
  "Harriet",
  "Hakuna Madonna",
  "Taylor",
  "Swift",
  "Evermore",
  "Inez",
  "Karma",
  "Lavender",
  "August",
  "Midnight",
  "Harry",
  "Mona",
  "Lisa",
  "Phil",
  "Lil",
  "Monica",
  "Rachel",
  "Polka",
  "Dot",
  "Puss",
  "Boots",
  "Daisy",
  "Piper",
  "Madame President",
  "Katy",
  "Cindy",
  "Purry",
  "Kitty",
  "Kitten",
  "Whiskers",
  "Fluffy",
  "Mittens",
  "Snowball",
  "Simba",
  "Leo",
  "Lola",
  "Felix",
  "Cleo",
  "Mittens",
  "Patches",
  "Peanut",
  "Pumpkin",
  "Pixie",
  "Puddles",
  "Sparky",
  "Socks",
  "Sugar",
  "Sweetie",
  "Tiny",
  "Tiger",
  "Tilly",
  "Toby",
  "Trixie",
  "Whiskers",
  "Winston",
  "Xena",
  "Yoda",
  "Zoe",
];

const getRandomCatNames = (count) => {
  const shuffled = catNames.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState([]);
  const [resetCards, setResetCards] = useState(false);
  const [allFlipped, setAllFlipped] = useState(false);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);

  // Fetch data from an external API (images from cat API)
  useEffect(() => {
    const fetchData = async () => {
      /* const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12'); */
      const apiKey =
        "live_VSgQc5Zpc0fRIbMPUp0mxGWO1DdQXUjTouFKxBMGqGLfAizmDZvoMjygidNuvCaj";
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=12",
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      const data = await response.json();

      /* Add random names */
      const catNamesSubset = getRandomCatNames(data.length);
      const dataWithNames = data.map((catImage, index) => ({
        ...catImage,
        name: catNamesSubset[index],
      }));

      setCards(dataWithNames);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (win) {
      setWin(false);
    }
  }, [win]);

  useEffect(() => {
    if (resetCards) {
      setLost(true);
      setTimeout(() => {
        setLost(false);
      }, 1400);
    }
  }, [resetCards]);

  useEffect(() => {
    if (score === cards.length && score > 0) {
      setWin(true);
      setBestScore(score);
    }
  }, [score, cards.length]);

  /* Initial card-back while fetching imgs */
  useEffect(() => {
    setAllFlipped(true);
    if (cards.length > 0) {
      setTimeout(() => {
        setAllFlipped(false);
      }, 2000); // Wait for 1 second before flipping to show the front
    }
  }, [cards.length]);

  const incrementScore = () => {
    setScore((score) => score + 1);
    setResetCards(false);
  };

  const changeBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setResetCards(true);
  };

  const shuffleCards = () => {
    setCards((prevCards) => shuffleArray([...prevCards]));
  };

  const flipCards = () => {
    setAllFlipped(true);
    setTimeout(() => {
      shuffleCards();
      setTimeout(() => {
        setAllFlipped(false);
      }, 600); // Time for the flip back animation
    }, 600); // Time for the initial flip animation
  };

  return (
    <>
      <header className="header-content">
        <Title titleName="The Purrfect Memory"></Title>
        <Score currentScore={score} bestScore={bestScore}></Score>
      </header>

      <main className={`container ${lost ? "lost" : ""}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            url={card.url}
            shuffle={shuffleCards}
            incrementScore={incrementScore}
            changeBestScore={changeBestScore}
            flipCards={flipCards}
            allFlipped={allFlipped}
            resetCards={resetCards}
          ></Card>
        ))}
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>

      <ConfettiExplosion fire={win}></ConfettiExplosion>
    </>
  );
}

export default App;
