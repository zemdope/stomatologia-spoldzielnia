import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import {
  AdvantagesSection,
  Hero,
  HeroHeading,
  HeroImage,
  ReviewsSection,
  ServicesSection,
  ShowcaseGallery,
  ShowcaseImage,
  ShowcaseSection,
  StyledButton,
  StyledLinkButton,
  StyledList,
  StyledReview,
  TeamImage,
  TeamSection,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
} from 'assets/styles/pages/indexPage.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import {
  GoogleIconStyled,
  ShowcaseCorner,
  StarIconStyled,
  WrapperIcons,
} from '../assets/styles/pages/indexPage.styles'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO/SEO'

export const Head = () => (
  <>
    <SEO />
  </>
)

const IndexPage = ({ data }) => {
  return (
    <AnimatePresence>
      <ContentWrapper
        initial={{
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          transition: { duration: 0.4 },
        }}
        animate={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',

          transition: { duration: 0.8, delay: 0.6 },
        }}
        exit={{
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          transition: { duration: 0.2 },
        }}
      >
        <Hero>
          <HeroImage
            imageSource={data.hero.publicURL}
            alt="uśmiechnięta kobieta"
          >
            <HeroHeading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 1.5,
              }}
            >
              <h1>
                Stomatolog Spółdzielnia <br />
                Lekarska{' '}
              </h1>
              <p>Gdańsk, wrzeszcz</p>
            </HeroHeading>
          </HeroImage>
        </Hero>
        <WelcomeSection>
          <WelcomeSectionContent
            position="topRight"
            size="100px"
            distance="30px"
            offset="600"
          >
            <h2>Obsługa klienta</h2>
            <p>
              Profesjonalny stomatologiczny gabinet w sercu Gdańska. Młodzi,
              zaangażowani lekarze, przyjazna dla pacjenta atmosfera, a
              jednocześnie otoczenie wykwalifikowanej kadry lekarskiej w
              przychodni ogólnomedycznej.
            </p>
            <p>
              Wyróżnia nas duże zaangażowanie w pracy z pacjentami. Staramy się,
              aby wizyty przebiegały sprawnie, bezboleśnie i bezstresowo dla
              pacjentów.
            </p>
          </WelcomeSectionContent>

          <WelcomeSectionImage
            position="bottomLeft"
            color="beige"
            size="100px"
            distance="30px"
            imageSource={data.welcome.publicURL}
            alt="obsługa pacjenta"
          />
        </WelcomeSection>
        <AdvantagesSection
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <HighlightedHeading width="50" isRight>
            Co nas Wyróżnia?
          </HighlightedHeading>
          <StyledList>
            <li>
              <h3>Nowoczesna stomatologia</h3>
              <p>
                Na pierwszej wizycie po wnikliwym badaniu i diagnostyce
                wykonujemy plan leczenia, który w każdym przypadku jest
                dopasowany do Twoich potrzeb.
              </p>
            </li>
            <li>
              <h3>Stomatologia bez bólu</h3>
              <p>
                Nasz personel pozwoli Ci przejść bezstresowo i bezboleśnie przez
                wszystkie etapy leczenia.
              </p>
            </li>
            <li>
              <h3>Indywidualne podejście</h3>
              <p>
                Indywidualne podejście do każdego Pacjenta, który, zawsze może
                liczyć na pełne zaangażowanie, profesjonalizm i empatię naszego
                zespołu ekspertów.
              </p>
            </li>
          </StyledList>
        </AdvantagesSection>
        <ShowcaseSection>
          <h2>Oferta</h2>
          <div>
            <StyledButton as={Link} to="/cennik" isCentered>
              cennik usług
            </StyledButton>
            <StyledButton as={Link} to="/uslugi" isCentered>
              nasze usługi
            </StyledButton>
          </div>
          <ShowcaseGallery>
            <ShowcaseImage src={data.grid1.publicURL} alt="zdjęcie uśmiechu" />
            <ShowcaseImage
              src={data.grid2.publicURL}
              alt="badanie mikroskopem"
            />
            <ShowcaseImage
              src={data.grid3.publicURL}
              alt="badanie mikroskopem"
            />
            <ShowcaseImage
              src={data.grid4.publicURL}
              alt="propozycja leczenia"
            />
            <ShowcaseCorner
              position="bottomLeft"
              size="100px"
              distance="30px"
              color="beige"
            />
            <ShowcaseCorner
              position="topRight"
              size="100px"
              distance="30px"
              color="dark"
            />
          </ShowcaseGallery>
        </ShowcaseSection>
        <ServicesSection>
          <div>
            <HighlightedHeading width="55">
              Twój stomatolog w Gdańsku
            </HighlightedHeading>

            <StyledLinkButton as={Link} to="/uslugi">
              Sprawdź pełen zakres naszych usług
            </StyledLinkButton>
          </div>
          <p>
            To, co dla innych stomatologów wykracza poza zakres usług, dla nas
            jest standardem. Wyróżnia nas bezkompromisowa troska o pacjenta.
          </p>
          <StyledList>
            <li>
              <h3>Protetyka</h3>
              <p>
                Protetyka stomatologiczna jest dziedziną stomatologii zajmującą
                się odtwarzaniem utraconej funkcji żucia i poprawą estetyki
                wyglądu pacjentów poprzez uzupełnianie braków w uzębieniu —
                zarówno tych częściowych, jak i całkowitych.
              </p>
            </li>
            <li>
              <h3>Implantologia</h3>
              <p>
                Implantologia to dziedzina stomatologii, która skupia się na
                eliminowaniu braków zębowych w szczęce lub żuchwie przy pomocy
                implantów.
              </p>
            </li>
            <li>
              <h3>Chirurgia stomatologiczna</h3>
              <p>
                Chirurgia stomatologiczna to dział stomatologii skupionych na
                leczeniu chorób jamy ustnej. Zabiegi z jej zakresu, mimo tego,
                że są inwazyjne, oferują wysoką skuteczność i efekty utrzymujące
                się przez długi czas. Dzięki temu nasi pacjenci mogą cieszyć się
                zdrowym uzębieniem, wolnym od zmian chorobowych czy stanów
                zapalnych.
              </p>
            </li>
            <li>
              <h3>Stomatologia zachowawcza</h3>
              <p>
                Dział stomatologii poświęcony profilaktyce próchnicy zębów oraz
                leczeniu ubytków próchnicowych.
              </p>
            </li>
          </StyledList>
        </ServicesSection>

        <TeamSection>
          <div>
            <HighlightedHeading isRight width="70">
              Poznaj nasz zespół
            </HighlightedHeading>
            <p>
              Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało
              nam się stworzyć zespół dokosnały.
            </p>
            <StyledLinkButton as={Link} to="/zespol">
              Poznaj nas lepiej
            </StyledLinkButton>
          </div>
          <TeamImage
            offset="700"
            position="bottomLeft"
            size="100px"
            distance="30px"
            color="beige"
            imageSource={data.team.publicURL}
            alt="zespół"
          />
          <TeamImage
            position="topRight"
            size="100px"
            distance="30px"
            color="dark"
            imageSource={data.team2.publicURL}
            alt="certyfikat zadowolenia pacjentów"
          />
        </TeamSection>

        <ReviewsSection>
          <div>
            <HighlightedHeading width="70">
              Zobacz opinie naszych Pacjentów
            </HighlightedHeading>
            <p>
              Bezkompromisowo wspieramy naszych pacjentów, a ich satysfakcja
              jest dla nas najważniejszym celem.
            </p>
          </div>
          <div>
            <StyledReview>
              <p>
                Bardzo serdecznie polecam to miejsce, pełen profesjonalizm,
                dbałość i troska o pacjenta. W kilku miejscach nie podjęto się
                usunięcia mojej 8, w tym przypadku zabieg wykonany w bardzo
                komfortowych warunkach, szybko i co najważniejsze, bezboleśnie.
              </p>
              <p>Michał</p>

              <WrapperIcons>
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <GoogleIconStyled />
              </WrapperIcons>
            </StyledReview>
            <StyledReview>
              <p>
                Bardzo serdecznie polecam to miejsce, pełen profesjonalizm,
                dbałość i troska o pacjenta. W kilku miejscach nie podjęto się
                usunięcia mojej 8, w tym przypadku zabieg wykonany w bardzo
                komfortowych warunkach, szybko i co najważniejsze, bezboleśnie.
              </p>
              <p>Michał</p>

              <WrapperIcons>
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <StarIconStyled />
                <GoogleIconStyled />
              </WrapperIcons>
            </StyledReview>
          </div>
        </ReviewsSection>
        <ContactForm />
      </ContentWrapper>
    </AnimatePresence>
  )
}

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/herrro.jpg/" }) {
      publicURL
    }
    welcome: file(relativePath: { regex: "/obsluga.jpeg/" }) {
      publicURL
    }
    grid1: file(relativePath: { regex: "/grid1.jpeg/" }) {
      publicURL
    }
    grid2: file(relativePath: { regex: "/grid2.jpeg/" }) {
      publicURL
    }
    grid3: file(relativePath: { regex: "/grid4.jpeg/" }) {
      publicURL
    }
    grid4: file(relativePath: { regex: "/grid3.jpeg/" }) {
      publicURL
    }
    team: file(relativePath: { regex: "/teamSection2.jpg/" }) {
      publicURL
    }
    team2: file(relativePath: { regex: "/TeamSectionPhoto.jpg/" }) {
      publicURL
    }
  }
`

export default IndexPage
