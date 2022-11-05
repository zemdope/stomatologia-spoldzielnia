import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.color.beige};

  h4 {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
    grid-row: 1/2;
    margin-bottom: 20px;
    align-self: center;
  }

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1/3;

    a {
      color: black;
      text-decoration: none;
      margin: 10px 0;
      font-family: 'Intitled Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1px;

      :last-child {
        font-weight: 500;
      }
    }
  }

  div:last-of-type {
    grid-row: 1/2;
    margin-left: auto;

    span {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }

  div:last-of-type a {
    a {
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 100px 100px 60px;

    div:first-of-type {
      width: 60%;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`