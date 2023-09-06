import { styled } from "styled-components";

export const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    border: 1px solid #ccc;
    box-shadow: #ccc 5px 5px 10px;
    background-color: #ccc;
    width: 300px;
    height: 300px;

    overflow: hidden;

    border-radius: 50%;

    img{
      width: 100%;
    }
  }

  h1{
    color: #F00;
  }
  
`