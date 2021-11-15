import styled from 'styled-components'

interface Props {
  bgURL: string;
}

export const Detail = styled.div`
  margin: 0 auto;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: -130px;
  max-width: 748px;
  z-index:5;
  background: linear-gradient(to top, #efeeec 80%, transparent 100%);

  .spacer {
    padding-top: 132px;
  }
  
  .header {
    padding: 0px 20px;
    margin: 0 auto;
    text-align: center;

    h4 {
      margin: 0px;
    }

    p {
      margin-top: 5px;
      line-height: 1;
    }
  }

  .info {
    margin-top: 5px;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 0 15px;

    .default {    
      display: flex;
      align-items: center;
      
      padding: 3.5px 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      
      svg {
        margin-right: 2.5px;
      }
    }

    .genres {
      display: flex;
      align-items: center;

      svg {
        margin-right: 2.5px;
      }
    }
  }

  .body {
    padding: 0px 2rem;
    margin-top: 20px;
    text-align: justify;
  }
`;

export const MovieDetailWrapper = styled.div`
  margin: 0 auto;
  max-width: 780px;
  height: 640px;
  border-radius: 5px;
  position: relative;
  padding: 1rem;
  z-index: 5;

  [data-tooltip]:before {            
    position : absolute;
     content : attr(data-tooltip);
     opacity : 0;
  }
  
  [data-tooltip]:hover:before {        
    opacity : 1;
    z-index: 100;
    margin-top: 50px;
    padding: 3px 5px;
    border-radius: 2px;
    text-shadow: 0px 1px 1px #ccc;
  }

  [data-tooltip]:not([data-tooltip-persistent]):before {
    pointer-events: none;
  }
`

export const MovieDetail = styled.div<Props>`
  min-height: 342px;  
  max-height: 342px;  
  margin:0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background: url(${props => props.bgURL });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transform: skewY(-4deg);
    transform-origin: 0 0;
  }
`