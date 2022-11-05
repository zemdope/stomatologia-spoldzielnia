import * as React from 'react'
import { Link } from 'gatsby'

import styled, { keyframes } from 'styled-components'

const SlideLeftStart = keyframes`
  0% {
    transform: translateX(100%);
  }
  3% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 99999999;
    transform-origin: 0 0;
    animation: ${SlideLeftStart} 3s forwards;
  }
`

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 15px;
  position: absolute;
  top: 70%;
`

const AnimationWrapper = () => {
  return <Wrapper key={toggle ? 1 : 2}></Wrapper>
}

export default AnimationWrapper
