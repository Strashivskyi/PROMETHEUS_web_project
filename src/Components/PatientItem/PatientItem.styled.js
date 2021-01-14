import styled from "styled-components";

export const Item = styled.div`
  display:inline-block;
  background: #FFFFFF;
  margin : 25px;
  margin-left: 65px;
  width: 275px;
  height: 370px;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 2px;
`;

export const Name = styled.h2`
   padding-left:4rem;
   color: #16192C;
   font-family: Inter;
   font-style: normal;
`;


export const Amount = styled.h2`
   padding-left:4rem;
   color: #6E6E6E; 
   font-family: Segoe UI Historic;
   font-style: normal;
   font-weight: normal;
`;


export const ButtonItem = styled.button`
  padding-top: 0rem;
  margin-left: 25px;
  background: #48535F;
  width: 227px;
  height: 30px;
  border-radius: 3px;
  border: none;
  color: white;
`;