import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import {useState} from 'react';
import {Button,Outlinebutton} from "../styled/Button"
import Rules from './Rules'

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber , setSelectedNumber] = useState(0); 
    const [currentDice , setCurrentDice] = useState(1);
    const [Error,setError] = useState('');
    const [rules,setRules] = useState(false);

    function showrules(){
        setRules(prev=>!prev);
    }

    function generateRandomNumber(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = ()=>{
        if(!selectedNumber) {
            setError("You Have Not Selected Any Number!!");
            return
        };
        setError('');
        const randomnumber = generateRandomNumber(1,6.5);
        setCurrentDice(randomnumber);

        if(currentDice == randomnumber){
            setScore(prev=>prev+randomnumber);
        }else{
             setScore(prev=>prev-2);
        }
        setSelectedNumber(undefined);
    }

    const resetScore=()=>{
        setScore(0);
    }

  return (
    <Top>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector Error={Error} setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}
        />
        </div>
        
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btns">
            <Outlinebutton onClick={resetScore}>Reset Score</Outlinebutton>
            <Button onClick={showrules} >Show Rules</Button>
        </div>
        {rules ? <Rules/> : ''}
    </Top>
  )
}

export default GamePlay


const Top = styled.main`
  padding-top: 30px;
.top_section{
    padding-top: 2 0px;
    display: flex;
    align-items: end;
    justify-content:space-around ;
    /* margin: 10px; */
}
.btns{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
}
`;


