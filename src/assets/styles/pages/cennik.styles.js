import styled from 'styled-components'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles'

export const ContentWrapperStyled = styled(ContentWrapper)`
  margin-bottom: 100px;
`
export const PriceWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  h3 {
    margin: 50px 0;
    font-size: 2.5rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    text-align: center;
  }
`
export const PriceWrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    position: relative;

    list-style: none;

    &:first-child::after {
      display: none;
    }
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: ${({ theme }) => theme.color.steel};
      transform: translateY(0px);
    }

    p {
      font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
      margin: 10px 0;
      width: 100%;
    }
    p:last-child {
      margin-right: 20px;
      font-weight: 600;
      text-align: right;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }
`
