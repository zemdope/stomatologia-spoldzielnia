import * as React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-family: ${({ theme }) => theme.font.family.montserrat};
`
const Header2 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.cormorant};
`

const IndexPage = () => {
  return (
    <main>
      <Header>stomatologia spoldzielnia</Header>
      <Header2>stomatologia spoldzielnia</Header2>
    </main>
  )
}

export default IndexPage
