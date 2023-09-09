import { styled } from 'styled-components'

export const MyMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 50%;
    padding: 10px 20px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    border-radius: 8px;

    text-align: center;
    background: #ccc;

    text-decoration: none;
    color: #000;

    &:hover {
      background: #eee;
    }
  }
`
