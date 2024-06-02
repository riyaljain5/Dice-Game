
import styled from "styled-components"
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import React, { useState } from 'react'
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./rules"

const Gameplay = () => {
    const[score, setScore] = useState(0);
    const [selectedNumber , setselectedNumber]=useState();
    const [currentDice, setCurrentDice] = useState(1);
    const[error, setError] = useState("");

    const generateRandomNumber = (min,max)=>{
        return Math.floor(Math.random()*(max-min) +min);   
    }
    const roleDice=() =>{
        if (!selectedNumber){
            setError("You have not selected any number");
            return;
        };
    
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
       
        if(selectedNumber === randomNumber){
            setScore((prev)=>prev+randomNumber)
        }
        else{
            setScore((prev)=>prev -2)
        }
        setselectedNumber(undefined);
    }

    const resetScore=()=>{
        setScore(0);

    }

    const[showRules, setShowRules] = useState(false);
  return (
    <MainContainer>
       <div className='top_section'> 
        <TotalScore score={score}/>
        <NumberSelector
        setError={setError}
        error={error} 
        selectedNumber={selectedNumber}
        setselectedNumber={setselectedNumber}/>
        </div>
        <RollDice currentDice={currentDice}
        roleDice={roleDice}/>
        <div className="Btns">
            <OutlineButton onClick={resetScore} >Reset Score</OutlineButton>
            <Button onClick={()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>

        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer =styled.main`
padding-top: 70px;
margin: 30px;
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.Btns{
    margin-top: 30px ;
    display: flex ;
    flex-direction: column;
    justify-content: center;
   gap: 15px;
    align-items: center;
}
`
