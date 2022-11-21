import React from 'react'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'

import MailIcon from 'assets/icons/mail.svg'
import AddressIcon from 'assets/icons/addressIcon.svg'
import PhoneIcon from 'assets/icons/phone.svg'
import {
  ContactContentWrapper,
  ContactInfoWrapper,
  MapContainer,
  StyledListContact,
  ContactDetailsWrapper,
} from '../assets/styles/pages/kontakt.styles'
import { ContactForm } from '../components/ContactForm/ContactForm'

import SimpleMap from '../components/Maps/SimpleMap'
import SEO from '../components/SEO/SEO'

export const Head = () => (
  <>
    <SEO
      title="Stomatolog spółdzielnia - Optymalny dentysta Gdańsk"
      description="Zapraszamy do kontaktu z Gabinetem Stomatologicznym spółdzielnia w Gdańsku na alei Grunwaldzkiej 68. Zapisz się do dentysty Stomatolog spółdzielnia lekarska."
    />
  </>
)

const Kontakt = () => {
  return (
    <ContactContentWrapper
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
      <ContactInfoWrapper>
        <HighlightedHeading>Odwiedź nas</HighlightedHeading>
        <StyledListContact>
          <div>
            <h3>Godziny otwarcia</h3>
            <div>
              <span>Poniedzialek</span>
              <span>10:00-18:00</span>
              <span>Wtorek</span>
              <span>09:00-17:00</span>
              <span>Środa</span>
              <span>11:00-19:00</span>
              <span>Czwartek</span>
              <span>08:00-20:00</span>
              <span>Piątek</span>
              <span>10:00-18:00</span>
              <span>Sobota</span>
              <span>Zamknięte</span>
              <span>Niedziela</span>
              <span>Zamknięte</span>
            </div>
          </div>
        </StyledListContact>
      </ContactInfoWrapper>

      <MapContainer>
        {' '}
        <SimpleMap
          color="beige"
          offset="2000"
          position="bottomRight"
          size="100px"
          distance="30px"
        />
      </MapContainer>
      <ContactDetailsWrapper>
        <div>
          <h3>Adres</h3>
          <a href="https://www.google.pl/maps/place/Stomatolog+Sp%C3%B3%C5%82dzielnia+Lekarska.+Gda%C5%84sk,+Wrzeszcz./@54.3769011,18.608064,17z/data=!4m15!1m8!3m7!1s0x46fd74969e510033:0x1c41475424901958!2sAleja+Grunwaldzka+68,+80-244+Gda%C5%84sk!3b1!8m2!3d54.376898!4d18.610258!16s%2Fg%2F11c5cfg1_f!3m5!1s0x46fd75dcd3fd99e5:0xc366f33abb67162d!8m2!3d54.376898!4d18.610258!16s%2Fg%2F11q23ktz8f">
            <AddressIcon />
            aleja Grunwaldzka 68 <br />
            80-244 Gdańsk
          </a>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href="mailto:stomatolog.spoldzielnialekarska@gmail.com">
            <MailIcon />
            stomatolog.spoldzielnia
            <br />
            lekarska@gmail.com
          </a>
          <a href="tel:605439089">
            {' '}
            <PhoneIcon /> 605 439 089
          </a>
        </div>
      </ContactDetailsWrapper>
      <ContactForm />
    </ContactContentWrapper>
  )
}

export default Kontakt
