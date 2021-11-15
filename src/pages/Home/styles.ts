import styled from 'styled-components'

interface Props {
  bgURL: string;
}

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    padding: 7px;
  }
`

export const Card = styled.div<Props>`
  background-color: black;
  box-shadow: 5px 5px 15px 0px rgb(0 0 0 / 48%);
  border-radius: 10px;
  width: 185px;
  height: 278px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all .5s ease-in-out;
  margin: 7.5px;

  .rating {
    position: absolute;
    font-weight: 700;
    color: #ffe100;
    background-color: rgb(103, 115, 133, 0.8);
    padding: 0.5px 7px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  &:hover {
    transform: scale(1.01);
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${props => props.bgURL});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
  }
}
`

export const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  padding: 1.5rem;
`