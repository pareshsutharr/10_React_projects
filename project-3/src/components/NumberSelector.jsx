import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const NumberSelector = ({selectedNumber,setSelectedNumber,Error,setError}) => {
    const array = [
        1,2,3,4,5,6];

        const numberselectorhandler=(value)=>{
            setSelectedNumber(value);
            setError("");
        }

  return (
    <NumberSelectorContainer>
        <h6>{Error}</h6>
        <div className="flex">
      {
        array.map((value,i)=>(
            <Box 
            isSelected={value === selectedNumber}
            onClick={()=>numberselectorhandler(value)}
            key={i}>{value}</Box>
        ))
      }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
h6{
    font-size: 15px;
    padding: 10px;
    color: crimson ;
}
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
`;


const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=> props.isSelected ? "black" : "white"};
color: ${(props)=> props.isSelected ? "white" : "black"};
`;