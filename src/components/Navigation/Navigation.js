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
  WrapperDesktop,
} from './Navigation.styles'
import { motion } from 'framer-motion'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 40 },
  }
  const item = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  }

  return (
    <OuterWrapper>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledBurger isOpen={isOpen} onClick={toggleNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </StyledBurger>

      <Wrapper isOpen={isOpen}>
        <Link onClick={toggleNavigation} to="/">
          <StyledLogo isMobile />
        </Link>

        <StyledNavigation>
          <ul>
            <motion.li
              initial="hidden"
              animate={isOpen ? 'visible' : 'null'}
              transition={{ duration: 0.3, delay: 0.4 }}
              variants={variants}
            >
              <a
                href="https://www.znanylekarz.pl/placowki/stomatolog-spoldzielnia-lekarska"
                onClick={toggleNavigation}
              >
                Umów Wizytę
              </a>
            </motion.li>

            <motion.li
              initial="hidden"
              animate={isOpen ? 'visible' : 'null'}
              transition={{ duration: 0.3, delay: 0.5 }}
              variants={variants}
            >
              <Link onClick={toggleNavigation} to="/uslugi">
                Usługi
              </Link>
            </motion.li>
            <motion.li
              initial="hidden"
              animate={isOpen ? 'visible' : 'null'}
              transition={{ duration: 0.3, delay: 0.6 }}
              variants={variants}
            >
              <Link onClick={toggleNavigation} to="/cennik">
                Cennik
              </Link>
            </motion.li>
            <motion.li
              initial="hidden"
              animate={isOpen ? 'visible' : 'null'}
              transition={{ duration: 0.3, delay: 0.7 }}
              variants={variants}
            >
              <Link onClick={toggleNavigation} to="/zespol">
                Zespół
              </Link>
            </motion.li>

            <motion.li
              initial="hidden"
              animate={isOpen ? 'visible' : 'null'}
              transition={{ duration: 0.3, delay: 0.8 }}
              variants={variants}
            >
              <Link onClick={toggleNavigation} to="/kontakt">
                Kontakt
              </Link>
            </motion.li>
          </ul>
        </StyledNavigation>
        <SocialIconWrapper
          initial="hidden"
          animate={isOpen ? 'visible' : 'null'}
          transition={{ duration: 0.3, delay: 1, type: 'tween' }}
          variants={item}
        >
          <StyledSocialIcon isDark>
            <a href="https://www.facebook.com/stomatolog.spoldzielnialekarska">
              <FacebookIcon />
            </a>
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </SocialIconWrapper>
      </Wrapper>

      <WrapperDesktop isOpen={isOpen}>
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
              <Link onClick={toggleNavigation} to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <SocialIconWrapper>
          <StyledSocialIcon isDark>
            <a href="https://www.facebook.com/stomatolog.spoldzielnialekarska">
              <FacebookIcon />
            </a>
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </SocialIconWrapper>
      </WrapperDesktop>
    </OuterWrapper>
  )
}
