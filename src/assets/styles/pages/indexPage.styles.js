import styled from 'styled-components'
import { Link } from 'gatsby'
import arrowIcon from 'assets/styles/arrow.svg'
import { CornerEffect } from '../../../components/CornerEffectProvider/CornerEffect'
import GoogleIcon from '../../icons/google.svg'
import StarIcon from '../../icons/star.svg'
import { motion } from 'framer-motion'
export const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  li {
    margin: 30px 0;
    h3 {
      margin: 0;
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }
`

export const StyledButton = styled(motion.button)`
  display: block;
  margin: 8px 15px;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-weight: 500;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
`

export const StyledLinkButton = styled(Link)`
position: relative;
  display: inline-block;
  margin: 5px 0 10px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: underline;
  
  
  &::after {
    position: absolute;
     right: -35px;
    top: 50%;
    content: '';
    width: 20px;
    height: 20px;
    background-image: url("${arrowIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    transform: translateY(-50%);
  }
`

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 150px;
  height: 85vh;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    margin-bottom: 150px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    margin-bottom: 0px;
  }
`

export const HeroImage = styled.div`
position: relative;
width: calc(100% + 40px);
   margin-left:-20px;
   margin-right:-20px;
  max-width: 1200px;
  height: 100%;
  background:linear-gradient(
   to right,
  rgb(0 0 0 / .82), rgb(0 0 0 / 0)) ,url("${({ imageSource }) => imageSource}");
  background-position: 50% 100%;
  background-size: cover;
  opacity: 1;
  
 ${({ theme }) => theme.mq.desktop} {
    height: 800px;
    width: 100%;
    margin: 0 auto;
  }
`

export const HeroHeading = styled(motion.div)`
  position: absolute;
  top: 55%;
  left: 5%;
  opacity: 0;
  height: 50%;
  z-index: 3;

  h1 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    margin: 0;
    width: 80%;
    color: white;
  }

  p {
    max-width: 50%;
    color: white;
  }

  ${({ theme }) => theme.mq.mobileLandscape} {
    top: 10%;
  }

  ${({ theme }) => theme.mq.tabletAnimation} {
    h1 {
      font-size: ${({ theme }) => theme.font.size.headingMobile};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    top: 20%;
  }
`

const StyledSection = styled.section`
  margin: 200px 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 200px 0;
  }
`

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 180px 0 150px;
    width: 100%;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 220px 0 100px;
  }
`

export const WelcomeSectionContent = styled(CornerEffect)`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 30px 20px;
  width: 100%;
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
    width: 45%;
    top: 150px;
    right: 20px;
    height: auto;
    padding: 50px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: 150px;
  }
`

export const WelcomeSectionImage = styled(CornerEffect)`
  position: relative;
 
  width: 80%;
  height: 250px;

  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 20%;
  
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
    margin: 30px 0 10px;
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    text-align: center;
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
  img:nth-child(4) {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 50px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
    position: relative;
    grid-template-areas:
      'first second'
      'third fourth';
    img:nth-child(1) {
      grid-area: first;
    }
    img:nth-child(2) {
      grid-area: second;
    }
    img:nth-child(3) {
      grid-area: third;
    }
    img:nth-child(4) {
      display: block;
      grid-area: fourth;
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
  margin: 10px 0;
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '250px')};
  object-fit: cover;

  ${({ theme }) => theme.mq.tablet} {
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
  width: 100%;
  height: 300px;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

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
      width: 80%;
      justify-self: end;
      min-height: 300;
    }

    ${TeamImage}:last-child {
      height: 100%;
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      display: block;
      max-width: 670px;
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
  margin: 30px 0;
  padding: 40px 40px 20px;
  border: 1px solid ${({ theme }) => theme.color.steel};

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
