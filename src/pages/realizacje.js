import React from 'react'
import { graphql } from 'gatsby'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import { CornerEffect } from '../components/CornerEffectProvider/CornerEffect'
import {
  IntroSection,
  PortfolioItem,
} from '../assets/styles/pages/realizacje.styles'

const Realizacje = ({ data }) => {
  return (
    <ContentWrapper>
      <CornerEffect position="bottomRight" size="80px" distance="20px">
        <IntroSection>
          <div>
            <HighlightedHeading>Poznaj nasze realizacje</HighlightedHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat ad nostrum obcaecati aspernatur voluptate ullam recusandae
              dolorum sint magni.
            </p>
          </div>
          <img src={data.teamPhoto.publicURL} alt="" />
        </IntroSection>
      </CornerEffect>
      <CornerEffect
        position="topLeft"
        size="80px"
        distance="20px"
        color="beige"
      >
        <PortfolioItem isOdd>
          <div>
            <HighlightedHeading>Wybielanie</HighlightedHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat ad nostrum obcaecati aspernatur voluptate ullam recusandae
              dolorum sint magni. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nostrum.
            </p>
          </div>
          <img src={data.whiteToo.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect
        position="bottomRight"
        size="100px"
        distance="30px"
        color="dark"
      >
        <PortfolioItem>
          <div>
            <HighlightedHeading>Korony</HighlightedHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat ad nostrum obcaecati aspernatur voluptate ullam recusandae
              dolorum sint magni. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nostrum.
            </p>
          </div>
          <img src={data.surgery.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect
        position="topLeft"
        size="100px"
        distance="30px"
        color="beige"
      >
        <PortfolioItem isOdd>
          <div>
            <HighlightedHeading>Pruchnica</HighlightedHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat ad nostrum obcaecati aspernatur voluptate ullam recusandae
              dolorum sint magni. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nostrum.
            </p>
          </div>
          <img src={data.whiteToo.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect
        position="bottomRight"
        size="100px"
        distance="30px"
        color="beige"
      >
        <PortfolioItem isFullWidth>
          <div>
            <HighlightedHeading>Ortodoncja</HighlightedHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              fugiat ad nostrum obcaecati aspernatur voluptate ullam recusandae
              dolorum sint magni. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti, nostrum.
            </p>
          </div>
          <img src={data.surgery.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
    </ContentWrapper>
  )
}

export const query = graphql`
  query {
    teamPhoto: file(relativePath: { regex: "/7.jpg/" }) {
      publicURL
    }
    whiteToo: file(relativePath: { regex: "/13.jpg/" }) {
      publicURL
    }
    surgery: file(relativePath: { regex: "/12.jpg/" }) {
      publicURL
    }
  }
`

export default Realizacje
