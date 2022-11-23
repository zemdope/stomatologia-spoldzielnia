import { Link } from 'gatsby';
import React from 'react';

import FacebookIcon from 'assets/icons/facebookIcon.svg';
import InstagramIcon from 'assets/icons/instagramIcon.svg';
import { StyledIcon } from '../StyledIcon/StyledIcon';
import { StyledFooter } from './Footer.styles';

export const Footer = () => (
  <StyledFooter>
    <h4>Stomatolog spółdzielnia lekarska</h4>
    <div>
      <Link to='/uslugi'>Usługi</Link>
      <Link to='/cennik'>Cennik</Link>
      <Link to='/zespol'>Zespół</Link>
      {/* <Link to="/realizacje">Realizacje</Link> */}
      <Link to='/kontakt'>Kontakt</Link>

      <a href='https://www.znanylekarz.pl/placowki/stomatolog-spoldzielnia-lekarska'>
        Umów wizytę
      </a>
    </div>
    <div>
      <StyledIcon isDark>
        <a href='https://www.facebook.com/stomatolog.spoldzielnialekarska'>
          <FacebookIcon />
        </a>
      </StyledIcon>
    </div>
  </StyledFooter>
);
