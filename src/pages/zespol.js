import React from 'react'
import { graphql } from 'gatsby'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import MailIcon from 'assets/icons/mail.svg'
import PhoneIcon from 'assets/icons/phone.svg'
import {
  Hero,
  InfoItem,
  InfoItemContent,
  StyledLink,
} from '../assets/styles/pages/zespol.styles'

const Zespol = ({ data }) => {
  return (
    <ContentWrapper>
      <Hero imageSource={data.teammates.publicURL}>
        <h1>Poznajmy się</h1>
        <p>
          Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami
          współpracować.
        </p>
      </Hero>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Aleksander Winkel</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut
            soluta, pariatur nulla amet quod officiis voluptas iste laboriosam
            doloremque! Consequatur accusantium alias a delectus, necessitatibus
            consequuntur ipsum fuga quam vel voluptates inventore veniam neque
            architecto aspernatur quo ut eaque?
          </p>
          <a href="mailto:winkel@gmail.com">
            <MailIcon />
            winkel@gmail.com
          </a>
          <a href="tel:789789789">
            {' '}
            <PhoneIcon /> 789 789 789
          </a>
          <StyledLink href="https://www.znanylekarz.pl/aleksander-winkel/stomatolog-chirurg-stomatologiczny-protetyk/gdansk#fid=233841">
            Umów wizytę
          </StyledLink>
        </InfoItemContent>
        <img src={data.Olek.publicURL} alt="" />
      </InfoItem>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Tomasz Kowalski</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut
            soluta, pariatur nulla amet quod officiis voluptas iste laboriosam
            doloremque! Consequatur accusantium alias a delectus, necessitatibus
            consequuntur ipsum fuga quam vel voluptates inventore veniam neque
            architecto aspernatur quo ut eaque?
          </p>
          <a href="mailto:tomasz@gmail.com">
            <MailIcon /> tomasz@gmail.com
          </a>
          <a href="tel:789789789">
            <PhoneIcon /> 789 789 789
          </a>
          <StyledLink href="https://www.znanylekarz.pl/bartosz-olszlegier/stomatolog-chirurg-stomatologiczny-protetyk/gdansk#fid=233841">
            Umów wizytę
          </StyledLink>
        </InfoItemContent>

        <img src={data.Tomek.publicURL} alt="" />
      </InfoItem>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Rafal Nowak</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut
            soluta, pariatur nulla amet quod officiis voluptas iste laboriosam
            doloremque! Consequatur accusantium alias a delectus, necessitatibus
            consequuntur ipsum fuga quam vel voluptates inventore veniam neque
            architecto aspernatur quo ut eaque?
          </p>
          <a href="mailto:rafal@gmail.com">
            <MailIcon /> rafal@gmail.com
          </a>
          <a href="tel:789789789">
            <PhoneIcon /> 789 789 789
          </a>
          <StyledLink href="https://www.znanylekarz.pl/konrad-szczerbinski/stomatolog-chirurg-stomatologiczny-protetyk/gdansk#fid=233841">
            Umów wizytę
          </StyledLink>
        </InfoItemContent>
        <img src={data.Rafal.publicURL} alt="" />
      </InfoItem>
    </ContentWrapper>
  )
}

export const query = graphql`
  query {
    teammates: file(relativePath: { regex: "/14.jpg/" }) {
      publicURL
    }
    Olek: file(relativePath: { regex: "/4.jpg/" }) {
      publicURL
    }
    Tomek: file(relativePath: { regex: "/5.jpg/" }) {
      publicURL
    }
    Rafal: file(relativePath: { regex: "/6.jpg/" }) {
      publicURL
    }
  }
`

export default Zespol
