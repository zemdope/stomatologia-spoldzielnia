import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
background-color: #f6f6f4;
    font-size: 62.5%;
    scroll-behavior: smooth;
    margin: 0;
    overflow-x: hidden;
    
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    overflow-x: hidden;

  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 500;
    line-height: 1.2;
  }
  
  p, li, a {
    font-family: "Montserrat", sans-serif;
    
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`
