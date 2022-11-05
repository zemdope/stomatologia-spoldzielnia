import React from 'react'
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading'
import { graphql } from 'gatsby'
import {
  Address,
  ContactDetails,
  OfferDescription,
  OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
  Gallery,
  StyledIcon,
} from '../assets/styles/pages/oferta.styles'

const Oferta = ({ data }) => {
  return (
    <StyledContentWrapper>
      <OfferTitle>
        <Address>Wybielanie zębów</Address>
        <HighlightedHeading>Kompleksowe wybielanie zębów</HighlightedHeading>
      </OfferTitle>
      <Gallery>
        <img src={data.whitePhoto.publicURL} />
      </Gallery>

      <OfferDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        exercitationem tenetur alias, delectus voluptatem odit ad dolores
        assumenda quasi nobis!
      </OfferDescription>

      <OfferDetailsList>
        <li>
          <StyledIcon />
          <div>
            <p>Wybielanie zębów</p>
            <p>Wybielanie zębów</p>
          </div>
        </li>
        <li>
          <StyledIcon />
          <div>
            <p>Wybielanie zębów</p>
            <p>Wybielanie zębów</p>
          </div>
        </li>
        <li>
          <StyledIcon />
          <div>
            <p>Wybielanie zębów</p>
            <p>Wybielanie zębów</p>
          </div>
        </li>

        <li>
          <StyledIcon />
          <div>
            <p>Wybielanie zębów</p>
            <p>Wybielanie zębów</p>
          </div>
        </li>
      </OfferDetailsList>
      <ContactDetails>
        <img src={data.kowal.publicURL} />
        <div>
          <p>Kontakt:</p>
          <p>Robert Kowalski</p>
          <p>kowal@gmail.com</p>
          <p>515 254 545</p>
        </div>
      </ContactDetails>
    </StyledContentWrapper>
  )
}

export const query = graphql`
  query {
    whitePhoto: file(relativePath: { regex: "/11.jpg/" }) {
      publicURL
    }
    kowal: file(relativePath: { regex: "/4.jpg/" }) {
      publicURL
    }
  }
`

export default Oferta
