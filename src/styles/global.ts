import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'
export default createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.71429;
    min-height: 100vh;
    color: rgba(94,86,105,.87);
    transition: background-color 0.25s linear;
  }

  /* Typography
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
  }
  
  h1,
  h2,
  h3 {
    font-weight: 600;
    letter-spacing: -1px;
  }
  
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
  
  h1 {
    font-size: 56px;
    line-height: 1.14286;
  }
  
  h2 {
    font-size: 48px;
    line-height: 1.5;
  }
  
  h3 {
    font-size: 40px;
    line-height: 1.5;
  }
  
  h4 {
    font-size: 32px;
    line-height: 1.1;
    letter-spacing: -.5px;
  }
  
  h5 {
    font-size: 24px;
    line-height: 1.33333;
  }
  
  h6 {
    font-size: 18px;
    line-height: 1.33333;
  }
`