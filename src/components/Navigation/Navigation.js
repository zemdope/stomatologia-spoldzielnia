import React, { useState } from 'react'
import { Link } from 'gatsby'

import FacebookIcon from 'assets/icons/facebookIcon.svg'
import InstagramIcon from 'assets/icons/instagramIcon.svg'
import {
  OuterWrapper,
  StyledBurger,
  StyledLogo,
  StyledNavigation,
  StyledSocialIcon,
  Wrapper,
  SocialIconWrapper,
} from './Navigation.styles'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  return (
    <OuterWrapper>
      <Link to="/">
        <StyledLogo isSmall isMobile />
      </Link>
      <StyledBurger isOpen={isOpen} onClick={toggleNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Link onClick={toggleNavigation} to="/">
          <StyledLogo />
        </Link>

        <StyledNavigation>
          <ul>
            <li>
              <a
                href="https://www.znanylekarz.pl/placowki/stomatolog-spoldzielnia-lekarska"
                onClick={toggleNavigation}
              >
                Umów Wizytę
              </a>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/uslugi">
                Usługi
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/cennik">
                Cennik
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/zespol">
                Zespół
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/realizacje">
                Realizacje
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <SocialIconWrapper>
          <StyledSocialIcon isDark>
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </SocialIconWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}
