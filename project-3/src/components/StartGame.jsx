import React from 'react';
import styled from "styled-components";
import {Button} from "../styled/Button"

const StartGame = (props) => {
  return (
    <Container>
     <div><img src="/images/dices1.png" /></div> 
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={props.toggle}>Play Now</Button>
      </div>
      
     </Container>
  )
}

export default StartGame

const Container = styled.div`
display: flex;
justify-content: space-between;
max-width: 1080px;
height: 100vh;
align-items: center;
margin: 0px auto;

.content{
 h1{
white-space: nowrap;
font-size: 94px;
}
}

`;