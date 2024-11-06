import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <div className='content'>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: auto auto;

.content{
    margin-top: 50px;
    background-color: #FBF1F1;
    padding: 20px;
}
`;