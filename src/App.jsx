import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title'
import Score from './components/Score'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title titleName = "The Memory Game!"></Title>
      <Score currentScore = {count}></Score>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
