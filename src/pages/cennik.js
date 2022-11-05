import { graphql } from 'gatsby'
import React from 'react'
import {
  ContentWrapperStyled,
  PriceWrapper,
  PriceWrapperContent,
} from '../assets/styles/pages/cennik.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'

const Cennik = ({ data }) => (
  <ContentWrapperStyled>
    <HighlightedHeading>Cennik</HighlightedHeading>
    <PriceWrapper>
      <h3>Protetyka</h3>
      <PriceWrapperContent>
        <li>
          <p>Korona pełnoceramiczna lub na tlenku cyrkonu </p>
          <p>1500 - 1800zł</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>{data.cennik.endoprotezaPrice}</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Chirurgia</h3>
      <PriceWrapperContent>
        <li>
          <p>Korona pełnoceramiczna lub na tlenku cyrkonu </p>
          <p>1500</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Stomatologia zachowawcza</h3>
      <PriceWrapperContent>
        <li>
          <p>Korona pełnoceramiczna lub na tlenku cyrkonu </p>
          <p>1500</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Endodoncja</h3>
      <PriceWrapperContent>
        <li>
          <p>Korona pełnoceramiczna lub na tlenku cyrkonu </p>
          <p>1500</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
        <li>
          <p>Proteza akrylowa </p>
          <p>2300</p>
        </li>
        <li>
          <p>Proteza szkieletowa </p>
          <p>3000</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
  </ContentWrapperStyled>
)

export const query = graphql`
  query {
    cennik: contentfulStomatologiaSpoldzielnia(endoprotezaPrice: {}) {
      id
      endoprotezaPrice
    }
  }
`
export default Cennik
