import HealthcareIcon from '../../icons/healthcare.svg'
import ImplantIcon from '../../icons/implantIcon.svg'
import styled from 'styled-components'
import arrowIcon from '../arrow.svg'
import { StyledList } from './IndexPage.styles'

export const Hero = styled.div`
 width: calc(100% + 40px);
  margin-left: -20px;
  height: 85vh;
  display: flex;
  
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 50px;
  background:linear-gradient(
   to top,
  rgb(0 0 0 / .82), rgb(0 0 0 / 0)) ,url("${({ imageSource }) => imageSource}");
  background-size: cover;
  background-position: 50% 0;
  text-align: center;
 
  h1 {
    width: 60%;
    margin: 0 auto 0px auto;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    color: white;
    text-shadow: 0 0 20px black;
    
  }

  ${({ theme }) => theme.mq.tabletAnimation} {

 h1 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    
  }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    height: 800px;
    width: calc(100% + 200px);
    margin-left: -100px;

   
  }
`

export const HeroInfo = styled.div`
margin-bottom: 100px;
margin-top: 100px;
  a {
    
    position: relative;
    left: 30px;
    color: black;
    font-weight: 700;
    &::before {
      position: absolute;
       width: 20px;
      height: 20px;
      left: -30px;
      top: 50%;
      content: '';
      background-image: url("${arrowIcon}");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0 50%;
     
      transform: translateY(-50%) rotate(90deg);
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row-reverse;
    
    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: 90%;
      max-width: 1360px;
      background-color: ${({ theme }) => theme.color.steel};
      transform: translate(75px,-50px);
    }
    
    p {
      margin: 0;
      width: 460px;
    }
  }
  
  
`

export const HeroImage = styled.img`
width: 90%;
  height: 60%;
  position: absolute;
  top: 15%;
  right: 0;
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  z-index: -1;
  opacity: 1;
  
  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    top: 0;
    width: 75%;
    height: 75%;
  }
`

export const ServicesStyledList = styled(StyledList)`
  li {
    margin: 80px 0;
    max-width: 500px;
  }
  svg {
    margin-bottom: 25px;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-rows: repeat(2, 300px);
  }
`

export const StyledIcon = styled(ImplantIcon)`
  margin: 10px 0;
  width: 40px;
  height: 40px;
`
export const StyledIcon2 = styled(HealthcareIcon)`
  margin: 10px 0;
  width: 40px;
  height: 40px;
`
