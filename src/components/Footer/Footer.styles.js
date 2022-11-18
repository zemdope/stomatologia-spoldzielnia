import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.beige};

  h4 {
    grid-row: 1/2;
    margin-bottom: 30px;

    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
  }

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1/3;

    a {
      margin: 10px 0;
      color: black;
      text-decoration: none;
      font-family: 'Intitled Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1px;

      :last-child {
        font-weight: 600;
        color: ${({ theme }) => theme.color.lightBlack};
      }
    }
  }

  div:last-of-type {
    grid-row: 1/2;
    margin-left: auto;
    align-self: center;

    span {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }

  div:last-of-type a {
    a {
      font-weight: 600;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 100px 60px;

    div:first-of-type {
      width: 60%;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
