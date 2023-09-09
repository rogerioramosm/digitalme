import { styled } from 'styled-components'

export const MyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    border: 1px solid #ccc;
    box-shadow: #ccc 5px 5px 10px;
    background-color: #ccc;

    width: 200px;
    height: 200px;
    margin: 1.25rem 0;

    overflow: hidden;

    border-radius: 50%;

    img {
      width: 100%;
    }
  }

  h1 {
    padding: 1.25rem;
    text-align: center;
    color: #fff;
  }
`
