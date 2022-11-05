import styled from 'styled-components'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles'

export const ContentWrapperStyled = styled(ContentWrapper)`
  margin-bottom: 100px;
`
export const PriceWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    font-family: montserrat;
    text-align: center;
    margin: 50px 0;
  }
`
export const PriceWrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    list-style: none;
    gap: 100px;
    position: relative;

    &:first-child::after {
      display: none;
    }
    &::after {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;

      background-color: ${({ theme }) => theme.color.steel};
      transform: translateY(0px);
    }

    p {
      margin: 10px 0;
      width: 100%;
    }
    p:last-child {
      font-weight: 500;
      text-align: right;
      margin-right: 20px;
    }
  }
`
