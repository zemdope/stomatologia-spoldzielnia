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
} from 'assets/styles/pages/indexpage.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'
import {
  GoogleIconStyled,
  ShowcaseCorner,
  StarIconStyled,
  WrapperIcons,
} from '../assets/styles/pages/IndexPage.styles'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { AnimatePresence } from 'framer-motion'

const IndexPage = ({ data }) => {
  return (
    <AnimatePresence>
      <ContentWrapper
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
        <Hero>
          <HeroImage imageSource={data.hero.publicURL}>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              facilis accusamus reiciendis autem vitae perferendis, corporis
              natus harum deserunt quisquam nihil recusandae reprehenderit
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ullam voluptate nesciunt dicta id debitis doloremque et
              dignissimos perspiciatis provident.
            </p>
          </WelcomeSectionContent>

          <WelcomeSectionImage
            position="bottomLeft"
            color="beige"
            size="100px"
            distance="30px"
            imageSource={data.welcome.publicURL}
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
            Dlaczego szukasz właśnie nas?
          </HighlightedHeading>
          <StyledList>
            <li>
              <h3>Kompleksowa obsługa</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia tenetur ea cum itaque, architecto quis fugit voluptas
                sapiente nihil sequi.
              </p>
            </li>
            <li>
              <h3>Stomatolog na wyłączność</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia tenetur ea cum itaque, architecto quis fugit voluptas
                sapiente nihil sequi.
              </p>
            </li>
            <li>
              <h3>Zgrany zespół</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia tenetur ea cum itaque, architecto quis fugit voluptas
                sapiente nihil sequi.
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
            <StyledButton as={Link} to="/realizacje" isCentered>
              nasze realizacje
            </StyledButton>
          </div>
          <ShowcaseGallery>
            <ShowcaseImage src={data.grid1.publicURL} alt="#" />
            <ShowcaseImage src={data.grid2.publicURL} alt="#" />
            <ShowcaseImage src={data.grid3.publicURL} alt="#" />
            <ShowcaseImage src={data.grid4.publicURL} alt="#" />
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
              Twój komfort ponad wszystko
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
              <h3>Lorem ipsum dolor</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sint optio quos saepe id illo.
              </p>
            </li>
            <li>
              <h3>Plany leczenia</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sint optio quos saepe id illo.
              </p>
            </li>
            <li>
              <h3>Wysoki poziom świadczonych usług</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sint optio quos saepe id illo.
              </p>
            </li>
            <li>
              <h3>współpraca z najlepszymi</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sint optio quos saepe id illo.
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
              Sprawdź kim jesteśmy
            </StyledLinkButton>
          </div>
          <TeamImage
            offset="700"
            position="bottomLeft"
            size="100px"
            distance="30px"
            color="beige"
            imageSource={data.team.publicURL}
            alt=""
          />
          <TeamImage
            position="topRight"
            size="100px"
            distance="30px"
            color="dark"
            imageSource={data.team2.publicURL}
            alt=""
          />
        </TeamSection>

        <ReviewsSection>
          <div>
            <HighlightedHeading width="70">
              Co mówią o nas nasi pacjenci?
            </HighlightedHeading>
            <p>
              Bezkompromisowo wspieramy naszych pacjentów, a ich satysfakcja
              jest dla nas najważniejszym celem.
            </p>
          </div>
          <div>
            <StyledReview>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                ex pariatur doloribus architecto exercitationem. Deleniti quis
                laudantium repellendus totam quam eius maiores, laboriosam,
                dignissimos explicabo magni, autem soluta natus alias
                consectetur? Labore recusandae, deserunt, deleniti neque est
                quidem fugiat culpa ut optio vel rem at, praesentium cum
                temporibus sunt modi.
              </p>
              <p>Jacek</p>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nihil tenetur nisi unde ducimus ea ratione repudiandae
                sit quas beatae?
              </p>
              <p>Krystian</p>
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
    team: file(relativePath: { regex: "/team.jpeg/" }) {
      publicURL
    }
    team2: file(relativePath: { regex: "/TeamSectionPhoto.jpg/" }) {
      publicURL
    }
  }
`

export default IndexPage
