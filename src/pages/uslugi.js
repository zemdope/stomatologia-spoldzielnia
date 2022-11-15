import React from 'react'

import { graphql } from 'gatsby'

import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import {
  ContentWrapperStyled,
  Hero,
  HeroInfo,
  ServicesStyledList,
  KidsToothIconStyled,
  ImplantIconStyled,
  MicroscopeIconStyled,
  HealthcareIconStyled,
  CleanToothIconStyled,
  CrownToothIconStyled,
} from '../assets/styles/pages/uslugi.styles'
import SEO from '../components/SEO/SEO'

export const Head = () => (
  <>
    <SEO
      title="Usługi stomatologiczne, dentystyczne - Stomatolog Dentysta Gdańsk"
      description="Usługi stomatologiczne naszego gabinetu zlokalizowanego w Gdańsk wrzeszcz obejmują m.in. protetykę, leczenie kanałowe, wybielanie zębów i zabiegi implantologiczne."
    />
  </>
)

const Uslugi = ({ data }) => {
  return (
    <ContentWrapperStyled
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 300,
      }}
      transition={{
        type: 'spring',
        duration: 0.8,
        stiffness: 75,

        delay: 0.6,
      }}
    >
      <Hero imageSource={data.uslugi.publicURL}>
        <h1>Sprawdź co oferujemy naszym pacjentom</h1>
      </Hero>
      <HeroInfo>
        <p>
          To, co dla innych stomatologów wykracza poza zakres usług, dla nas
          jest standardem. Wyróżnia nas bezkompromisowa troska o pacjenta.
        </p>
        <a href="#szczegoly">Czytaj dalej</a>
      </HeroInfo>

      <HighlightedHeading id="szczegoly">
        Jak możemy Ci pomóc?
      </HighlightedHeading>
      <ServicesStyledList>
        <li>
          <CrownToothIconStyled />
          <h3>Protetyka</h3>
          <p>
            Jest dziedziną stomatologii zajmującą się odtwarzaniem utraconej
            funkcji żucia i poprawą estetyki wyglądu pacjentów poprzez
            uzupełnianie braków w uzębieniu — zarówno tych częściowych, jak i
            całkowitych.
          </p>
        </li>
        <li>
          <MicroscopeIconStyled />
          <h3>Endodoncja</h3>
          <p>
            Jest bardzo szybko rozwijającą się dziedziną stomatologii. Właściwą
            diagnozę zapewnia zastosowanie mikroskopu oraz endometru do pomiaru
            długości kanału. Prawidłowe wyleczenie endodontyczne zapewnia
            długoletnie utrzymanie zębów w jamie ustnej.
          </p>
        </li>
        <li>
          <HealthcareIconStyled />
          <h3>Chirurgia stomatologiczna</h3>
          <p>
            Dział stomatologii skupiony na leczeniu chorób jamy ustnej. Zabiegi
            z jej zakresu, mimo tego, że są inwazyjne, oferują wysoką
            skuteczność i efekty utrzymujące się przez długi czas. Dzięki temu
            nasi pacjenci mogą cieszyć się zdrowym uzębieniem.
          </p>
        </li>
        <li>
          <CleanToothIconStyled />
          <h3>Stomatologia zachowawcza</h3>
          <p>
            Dzial stomatologii poświęcony profilaktyce próchnicy zębów oraz
            leczeniu ubytków próchnicowych.
          </p>
        </li>
        <li>
          <ImplantIconStyled />
          <h3>Implantologia</h3>
          <p>
            Dziedzina stomatologii, która skupia się na eliminowaniu braków
            zębowych w szczęce lub żuchwie przy pomocy implantów.
          </p>
        </li>

        <li>
          <KidsToothIconStyled />
          <h3>Pedodoncja</h3>
          <p>
            To dziedzina stomatologii zajmująca się leczeniem dzieci. Naszym
            celem jest taka opieka nad małym pacjentem, aby przy współpracy z
            Państwem udało się go uchronić przed próchnicą zębów.
          </p>
        </li>
      </ServicesStyledList>
    </ContentWrapperStyled>
  )
}

export const query = graphql`
  query {
    uslugi: file(relativePath: { regex: "/heroUslugi.jpg/" }) {
      publicURL
    }
  }
`

export default Uslugi
