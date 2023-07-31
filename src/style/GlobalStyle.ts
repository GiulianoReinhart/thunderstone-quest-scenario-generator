import {createGlobalStyle, css} from 'styled-components'

export default createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    outline: none;
    color: white;
  }

  html {
    font-family: 'Pirata One';
    font-size: 10px;

    @media (max-width: 490px) {
      font-size: 9px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: radial-gradient(circle, rgba(90, 77, 63, 1) 0%, rgba(74, 61, 46, 1) 100%);
    width: 100dvw;
    font-size: 1.8rem;
  }

  #root {
    isolation: isolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 0 7rem 5rem;

    @media (max-width: 1580px) {
      padding: 0 3rem 5rem;
    }
  }

  #generator-main {
    flex: 1 1 100%;
    padding-bottom: 15rem;
    display: flex;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font-style: normal;
    font-weight: normal;
  }

  p {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: #e1a15c;
  }

  button,
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    transition: background-color 0.2s, color 0.2s, opacity 0.2s;

    &:not(:disabled) {
      cursor: pointer;

      &:hover {
        background-color: white;
        color: #5a4d3f;
      }
    }
  }

  button {
    border-radius: 1rem;
    height: 6rem;
    padding: 0 3rem;
    font-size: 3rem;

    @media (max-width: 750px) {
      font-size: 2.4rem;
      padding: 0 2rem;
      height: 5rem;
    }
  }
`}`
