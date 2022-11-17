import styled from 'styled-components'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles'
import { ContactFormWrapper } from '../../../components/ContactForm/ContactForm.styles'

export const MapContainer = styled.div`
  margin: 50px 0;
`
export const StyledListContact = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    h3 {
      margin: 20px 0;
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 700;
    }
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 10px;

      span {
        margin: 10px;
        justify-self: start;
        font-family: ${({ theme }) => theme.font.family.montserrat};
      }
    }
  }
`
export const ContactDetailsWrapper = styled.div`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;
    svg {
      margin-right: 5px;
    }
  }
  h3 {
    margin: 20px 0;
    text-align: center;

    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 700;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 300px;
  }
`
export const ContactInfoWrapper = styled.section`
  a {
    color: black;
    display: flex;
    align-items: center;
    margin: 5px 0 10px -7px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContactContentWrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 100px;

    ${ContactFormWrapper} {
      grid-column: 2 / 3;
      justify-self: center;
      width: 100% !important;
      margin: 0;
    }

    ${ContactInfoWrapper} {
      grid-column: 1 / 2;
      justify-self: center;
    }

    ${MapContainer} {
      align-self: center;
      grid-column: 1/3;
      grid-row: 2 / 3;
    }

    ${ContactDetailsWrapper} {
      align-self: center;
      grid-column: 1/3;
      grid-row: 3 / 4;
    }
  }
`
