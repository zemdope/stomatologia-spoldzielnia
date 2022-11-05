import React from 'react'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import { graphql } from 'gatsby'
import {
  FiltersList,
  Gallery,
  Welcome,
} from '../assets/styles/pages/oferty.styles'
import { Thumbnail } from '../components/Thumbnail/Thumbnail'

const Oferty = ({ data }) => (
  <ContentWrapper>
    <Welcome>
      <HighlightedHeading>Nasza oferta</HighlightedHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis quos
        dolorum consectetur, mollitia sequi error similique facere minus dicta!
      </p>
    </Welcome>
    <FiltersList>
      <li>Chirurgia stomatologiczna</li>
      <li>Protetyka</li>
      <li>Ortodoncja</li>
    </FiltersList>
    <Gallery>
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
    </Gallery>
  </ContentWrapper>
)

export const query = graphql`
  query {
    thumbnail: file(relativePath: { regex: "/13.jpg/" }) {
      publicURL
    }
  }
`

export default Oferty
