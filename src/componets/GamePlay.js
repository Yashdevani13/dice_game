import styled from "styled-components"
import NumberSelecter from "./NumberSelecter"
import TotalScore from "./TotalScore"
import { Container } from "@mui/material"
import RoleDice from "./RoleDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button"
import Rule from "./Rule"

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {

    if(!selectedNumber) {
        setError("You have not selected any number")
        return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber == randomNumber){
        setScore((prev) => prev + randomNumber)
    }else{
        setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setScore(0);

  }


    return (
        <Container>
            <MainContainer>
                <div className="top_section">
                    <TotalScore  score={score} />
                    <NumberSelecter
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber} />
                </div>
                <RoleDice 
                currentDice={currentDice}
                rollDice={rollDice}/>
                <div className="btn">
                    <OutlineButton onClick={resetScore}>Reset </OutlineButton>
                    <Button onClick={() =>  setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
                </div>

        { showRules   &&  <Rule />}
            </MainContainer>
        </Container>
    )
}

export default GamePlay


const MainContainer = styled.div`

    padding-top: 50px;

    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }
`;
