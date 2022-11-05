import React from 'react'

import { graphql } from 'gatsby'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import {
  Hero,
  HeroInfo,
  StyledIcon,
  StyledIcon2,
  HeroImage,
  ServicesStyledList,
} from '../assets/styles/pages/uslugi.styles'

const Uslugi = ({ data }) => {
  return (
    <ContentWrapper>
      <Hero>
        <h1>Sprawdź co możemy zaoferować naszym pacjentom</h1>
        <HeroImage src={data.teamSurgery.publicURL} alt="" />
        <HeroInfo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, a
            nobis sequi laborum delectus consectetur aliquam quisquam dolorum
            voluptas? Quis!
          </p>
          <a href="#szczegoly">Czytaj dalej</a>
        </HeroInfo>
      </Hero>
      <HighlightedHeading id="szczegoly">
        Jak możemy Ci pomóc?
      </HighlightedHeading>
      <ServicesStyledList>
        <li>
          <StyledIcon2 />
          <h3>Wybielanie</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem saepe eaque, earum dolorum ducimus. Tempora impedit porro
            incidunt officiis.
          </p>
        </li>
        <li>
          <StyledIcon />
          <h3>Leczenie kanałowe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem saepe eaque, earum dolorum ducimus. Tempora impedit porro
            incidunt officiis.
          </p>
        </li>
        <li>
          <StyledIcon2 />
          <h3>Ortodoncja</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem saepe eaque, earum dolorum ducimus. Tempora impedit porro
            incidunt officiis.
          </p>
        </li>
        <li>
          <StyledIcon />
          <h3>Wybielanie</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem saepe eaque, earum dolorum ducimus. Tempora impedit porro
            incidunt officiis.
          </p>
        </li>
      </ServicesStyledList>
    </ContentWrapper>
  )
}

export const query = graphql`
  query {
    teamSurgery: file(relativePath: { regex: "/16.jpg/" }) {
      publicURL
    }
  }
`

export default Uslugi
