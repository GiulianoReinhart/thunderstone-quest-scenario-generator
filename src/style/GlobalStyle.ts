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
  }

  html {
    font-size: 10px;
    font-family: 'Pirata One';
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: radial-gradient(circle, rgba(90, 77, 63, 1) 0%, rgba(74, 61, 46, 1) 100%);
    width: 100dvw;
    padding: 0 7rem 5rem;
  }

  #root,
  #__next {
    isolation: isolate;
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
  }

  a {
    text-decoration: none;
  }
`}`
