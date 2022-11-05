import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import arrowIcon from 'assets/styles/arrow.svg'
import { CornerEffect } from '../../../components/CornerEffectProvider/CornerEffect'
import GoogleIcon from '../../icons/google.svg'
import StarIcon from '../../icons/star.svg'

export const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  li {
    margin: 30px 0;
    h3 {
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 700;
      margin: 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
`

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
  color: black;
  text-decoration: none;
`

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: underline;
  position: relative;
  display: inline-block;
  margin: 5px 0 10px;
  
  &::after {
    position: absolute;
    content: '';
    background-image: url("${arrowIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    width: 20px;
    height: 20px;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
`
const photoTransform = keyframes`
0%{
 transform: translateY(0%);
  }
  100%{
   transform: translateY(90%);
  }
`
const photoTransformDesktop = keyframes`
0%{
 transform: translateX(0%);
  }
  100%{
   transform: translateX(100%);
  }
`
const appearHeading = keyframes`
0%{
 opacity: 0;
  }
  100%{
   opacity: 1;
  }
`

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 85vh;
  margin-bottom: 120px;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    height: 40vh;
    margin-bottom: 100px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    margin-bottom: 0px;
  }
`

export const HeroImage = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 100%;
  background-size: cover;
  width: 100%;
  height: 50%;
  position:absolute;
  top: 0;
  left: 0;
  transform: translate(0%);
  animation: ${photoTransform} 1s ease;
  animation-fill-mode: forwards;
  animation-delay: 1s;

  

  
  ${({ theme }) => theme.mq.mobileLandscape} {
   height: 100%;
  }

  ${({ theme }) => theme.mq.tabletAnimation} {
  width: 50%;
  animation: ${photoTransformDesktop} 1s ease;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    opacity: 1;
  }
`

export const HeroHeading = styled.div`
  opacity: 0;
  height: 40%;
  animation: ${appearHeading} 1s ease 2s;
  animation-fill-mode: forwards;

  h1 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    margin: 0;
    width: 90%;
  }

  p {
    max-width: 50%;
  }

  ${({ theme }) => theme.mq.tabletAnimation} {
    width: 50%;

    h1 {
      width: 75%;
      font-size: ${({ theme }) => theme.font.size.heading};
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    &::after {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 25%;
      background-color: ${({ theme }) => theme.color.steel};
      transform: translateY(-50px);
    }
  }
`

const StyledSection = styled.section`
  margin: 100px 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 100px 0;
  }
`

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 180px 0 150px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 180px 0 100px;
  }
`

export const WelcomeSectionContent = styled(CornerEffect)`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 30px 20px;
  position: relative;
  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }
  p {
    color: white;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 50%;
    top: 100px;
    height: auto;
    padding: 50px;
    right: 20px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: 150px;
  }
`

export const WelcomeSectionImage = styled(CornerEffect)`
  margin-top: 10px;
  width: 90%;
  height: 170px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80%;
  
  ${({ theme }) => theme.mq.desktop} {
    z-index: -1;
    top: -80px;
    height: 500px;
    width: 70%;
  }
`

export const AdvantagesSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ShowcaseSection = styled(StyledSection)`
  h2 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    text-align: center;
    margin: 30px 0 10px;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: -50px;

    h2 {
      margin: 0 0 30px;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`

export const ShowcaseGallery = styled.div`
  margin: 55px 0 50px;
  width: 98%;

  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    margin: 50px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    position: relative;
    img:nth-child(1) {
      grid-row: 1 / 2;
    }
    img:nth-child(2) {
      grid-row: 1 / 3;
    }
    img:nth-child(3) {
      grid-row: 2 / 4;
    }
    img:nth-child(4) {
      grid-row: 3 / 4;
    }
  }
`

export const ShowcaseCorner = styled(CornerEffect)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

export const ShowcaseImage = styled.img`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;

  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    margin: 0;
  }
`

export const ServicesSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 50px;

    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & > p {
      align-self: center;
      max-width: 450px;
    }

    ${StyledList} {
      grid-row: 2 / 2;
      grid-column: 1 / 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export const TeamImage = styled(CornerEffect)`
  margin-top: 30px;
  width: 90%;
  height: 300px;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
`

export const TeamSection = styled(StyledSection)`
  ${TeamImage}:last-child {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;

    div:nth-child(1) {
      grid-column: 1 / 1;
    }

    ${TeamImage} {
      margin: 0;
    }

    ${TeamImage}:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      width: 50%;
      justify-self: end;
    }

    ${TeamImage}:last-child {
      height: 100%;
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      display: block;
    }
  }
`

export const ReviewsSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;

    div:first-child {
      grid-row: 1 / 1;
      grid-column: 2 / 3;
      align-self: center;

      h2 {
        max-width: 300px;
        margin: 0;
      }
    }
    div:last-child {
      grid-row: 1 / 1;
      grid-column: 1 / 2;
    }
  }
`

export const StyledReview = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.steel};
  padding: 40px 40px 20px;
  margin: 30px 0;

  p:last-child {
    margin-top: 30px;
    font-weight: 700;
  }
`

export const GoogleIconStyled = styled(GoogleIcon)`
  width: 20px;
  height: 20px;
`
export const StarIconStyled = styled(StarIcon)`
  width: 20px;
  height: 20px;
`
export const WrapperIcons = styled.div`
  position: absolute;

  bottom: 20px;
  right: 20px;
  ${GoogleIconStyled} {
    margin-left: 20px;
  }
  ${StarIconStyled} {
  }
`
