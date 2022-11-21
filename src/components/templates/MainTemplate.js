import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyles';
import { theme } from '../../assets/styles/theme';
import { Navigation } from '../Navigation/Navigation';
import 'assets/styles/normalize.css';
import { Footer } from '../Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'gatsby';

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <CookieConsent
          location='bottom'
          buttonText='Zgoda'
          style={{
            background: '#ECEBE4',
            color: '#444d55',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0'
          }}
          buttonStyle={{
            background: '#444d55',
            color: '#fff',
            broderRadius: '30px',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: 'montserrat',
            borderRadius: '3px',
            margin: '5px 35px'
          }}
          expires={120}>
          <p
            style={{
              margin: 0,
              padding: 0,
              fontSize: '14px',
              fontWeight: 500
            }}>
            {' '}
            Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
            poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na
            ich użycie.{' '}
            <Link
              to='/polityka-prywatnosci'
              style={{
                textDecoration: 'none',
                color: '#685641'
              }}>
              Polityka prywatności
            </Link>
          </p>
        </CookieConsent>
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
