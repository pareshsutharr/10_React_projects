import styled from "styled-components";

export const Button = styled.button`
background-color:black;
color:white;
padding: 10px 18px;
border-radius: 5px;
min-width: 220px; 
height: 44px;
font-size: 16px;
align-self: end;
cursor: pointer;
border: none;


&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
}

`;

export const Outlinebutton = styled(Button)`
border: 1.5px solid black;
background-color: transparent;
color: black;

&:hover{
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;

}
`;