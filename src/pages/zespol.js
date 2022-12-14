import React from 'react'
import { graphql } from 'gatsby'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import PhoneIcon from 'assets/icons/phone.svg'
import {
  Hero,
  InfoItem,
  InfoItemContent,
  StyledLink,
} from '../assets/styles/pages/zespol.styles'
import SEO from '../components/SEO/SEO'

export const Head = () => (
  <>
    <SEO
      title="Zespół lekarzy dentystów - Stomatolog spółdzielnia Gdańsk"
      description="Przedstawiamy zespół lekarzy dentystów pracujący w gabinecie stomatologicznym spółdzielnia Gdańsk. Zachęcamy do odwiedzenia naszego gabinetu."
    />
  </>
)

const Zespol = ({ data }) => {
  return (
    <ContentWrapper
      initial={{
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        transition: { duration: 0.4 },
      }}
      animate={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',

        transition: { duration: 0.8, delay: 0.8 },
      }}
      exit={{
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: 0.2 },
      }}
    >
      <Hero imageSource={data.teammates.publicURL}>
        <h1>Nasz zespół</h1>
        <p>
          Stomatologia nie jest tylko naszym zawodem, lecz przede wszystkim
          pasją.
        </p>
      </Hero>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Aleksander Winkel</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <img src={data.Olek.publicURL} alt="" />
          <p>
            Absolwent Gdańskiego Uniwersytetu Medycznego. Do każdego leczenia
            podchodzi bardzo indywidualnie. Pacjenci cenią sobie bezstresową
            atmosferę, a jednocześnie wysoką staranność podczas leczenia.
            Zajmuje się protetyką i chirurgią stomatologiczną, ale również
            estetyczną stomatologią zachowawczą oraz endodoncją. Cały czas stara
            się rozwijać swoje umiejętności na specjalistycznych kursach i
            szkoleniach. W wolnym czasie realizuje się sportowo jako koszykarz.
            Interesuje go również siłownia, fizjoterapia i szeroko pojęty zdrowy
            styl życia.
          </p>

          <a href="tel:605439089">
            {' '}
            <PhoneIcon /> 605 439 089
          </a>
          <StyledLink href="https://www.znanylekarz.pl/aleksander-winkel/stomatolog-chirurg-stomatologiczny-protetyk/gdansk#fid=233841">
            Umów wizytę
          </StyledLink>
        </InfoItemContent>
        <img src={data.Olek.publicURL} alt="" />
      </InfoItem>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Bartosz Olszlegier</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <img src={data.Tomek.publicURL} alt="" />
          <p>
            Absolwent Gdańskiego Uniwersytetu Medycznego. Zajmuje się leczeniem
            protetycznym oraz stomatologią zachowawczą z endodoncją i chirurgią
            stomatologiczną. Jego priorytetem jest bezbolesne i komfortowe
            przeprowadzenie leczenia stomatologicznego. W pracy kładzie duży
            nacisk na rozwój umiejętności i znajomość nowoczesnych technik
            leczenia. Ciągle poszerza swoje kwalifikacje zawodowe uczęszczając w
            licznych kursach i szkoleniach. W wolnym czasie amator sportów
            siłowych oraz elektronicznej rozrywki.
          </p>

          <a href="tel:605439089">
            <PhoneIcon /> 605 439 089
          </a>
          <StyledLink href="https://www.znanylekarz.pl/bartosz-olszlegier/stomatolog-chirurg-stomatologiczny-protetyk/gdansk#fid=233841">
            Umów wizytę
          </StyledLink>
        </InfoItemContent>

        <img src={data.Tomek.publicURL} alt="" />
      </InfoItem>
      <InfoItem>
        <InfoItemContent>
          <HighlightedHeading>Konrad Szczerbiński</HighlightedHeading>
          <p>Lekarz dentysta</p>
          <img src={data.Rafal.publicURL} alt="" />
          <p>
            Absolwent Gdańskiego Uniwersytetu Medycznego. W czasie studiów mocno
            związany z Polskim Towarzystwem Studentów Stomatologii. Przez 3 lata
            członek zarządu Gdańskiego oddziału, pełniąc m.in funkcję prezesa.
            Pozwoliło mu to wziąć udział w kilkunastu konferencjach oraz wielu
            warsztatach i szkoleniach. Ciągle podnosi swoje kwalifikacje jako
            lekarz dentysta, a dziedzinami do których przykłada największą uwagę
            jest chirurgia stomatologiczna, implantologia oraz protetyka.
            Aczkolwiek na co dzień wykonuje zabiegi ze wszystkich dziedzin
            stomatologii u osób w każdym wieku. Poza stomatologią jego pasją są
            sporty siłowe. Trenuje trójbój biorąc aktywny udział w turniejach na
            szczeblu ogólnopolskim.
          </p>

          <a href="tel:605439089">
            <PhoneIcon /> 605 439 089
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
    teammates: file(relativePath: { regex: "/team.jpeg/" }) {
      publicURL
    }
    Olek: file(relativePath: { regex: "/olek.jpg/" }) {
      publicURL
    }
    Tomek: file(relativePath: { regex: "/Bartosz.jpg/" }) {
      publicURL
    }
    Rafal: file(relativePath: { regex: "/Konrad.jpg/" }) {
      publicURL
    }
  }
`

export default Zespol
