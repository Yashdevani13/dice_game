import styled from "styled-components"

export const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000;
border-radius: 5px;
width: 220px;
border: none;
font-size: 16px;
font-weight: bold;
transition: all 0.3s ;
cursor: pointer;

&:hover{
  background-color: white;
  color: #000;
  border: 2px solid black;
}
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
  background-color: black;
  color: white;
  border: 2px solid transparent;
}
`;