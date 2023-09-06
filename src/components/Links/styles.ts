import { styled } from "styled-components";

export const MyMain = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  a{
    width: 50%;
    padding: 10px 20px;
    margin-bottom: 10px;
    
    &:last-child{
      margin-bottom: 0;
    }

    border-radius: 8px;

    text-align: center;
    background: #CCC;

    text-decoration: none;
    color: #000;

    &:hover{
      background: #eee;
    }
  }

`