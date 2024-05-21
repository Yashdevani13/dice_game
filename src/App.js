import { useState } from 'react';
import './App.css';
import StartGame from './componets/StartGame';
import GamePlay from './componets/GamePlay';

function App() {

  const [isGameStart, setIsGameStart] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStart((prev) => !prev)
  }
  return (
    <>
    {
      isGameStart ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
    }
    {/* <StartGame /> */}
    </>
  );
}

export default App;
