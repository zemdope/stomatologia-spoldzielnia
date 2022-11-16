import Logo from '../../assets/icons/logo.svg'
import { StyledIcon } from '../StyledIcon/StyledIcon'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 30px 30px 30px 5px;
  position: absolute;
  top: 0;
  z-index: 1000;
  position: fixed;
  background-color: #f6f6f4;
`

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 1px;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    border-radius: 10px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      width: 1.5rem;
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`

export const Wrapper = styled(motion.div)`
  display: flex;
  will-change: transform;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f6f6f4;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 400ms ease-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`
export const WrapperDesktop = styled(Wrapper)`
  display: none;
  background-color: #f6f6f4;

  ${({ theme }) => theme.mq.desktop} {
    padding: 5px 45px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    transform: none;
  }
`
export const StyledLogo = styled(Logo)`
  width: 70px;
  height: 70px;
  padding: 15px 5px 5px;

  ${({ theme }) => theme.mq.desktop} {
    margin-right: 40px;
  }
`
export const SocialIconWrapper = styled.div``
export const StyledSocialIcon = styled(StyledIcon)`
  margin: 0 20px;
  width: 50px;
  height: 50px;

  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
  }
`
export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    :nth-child(1) a {
      font-weight: 600;
      min-width: 150px;
      position: relative;
      color: ${({ theme }) => theme.color.dark};
    }
    a {
      display: inline-block;
      padding: 25px;
      font-family: 'Intitled Sans', sans-serif;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: black;
      text-decoration: none;
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    li {
      a {
        padding: 0;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    ul {
      display: flex;

      li {
        margin: 0 20px;
      }
    }
  }
`
