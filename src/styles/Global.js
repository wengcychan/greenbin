import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    background-color: inherit;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    box-shadow: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: ${({theme}) => theme.fonts.lato}, sans-serif;
    background-color: ${({theme}) => theme.colors.background};
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 80%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 62.5%;
    }
  }
`