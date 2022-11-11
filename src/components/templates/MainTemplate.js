import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../assets/styles/GlobalStyles'
import { theme } from '../../assets/styles/theme'
import { Navigation } from '../Navigation/Navigation'
import 'assets/styles/normalize.css'
import { Footer } from '../Footer/Footer'
import { Navigations } from '../../pages/404'

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
