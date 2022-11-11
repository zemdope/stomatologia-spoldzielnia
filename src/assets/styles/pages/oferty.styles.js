import styled from 'styled-components'

export const Welcome = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto 40px;
    text-align: center;
    max-width: 500px;
  }
`

export const FiltersList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 0 50px;
  padding: 0;
  width: 100%;
  align-items: flex-start;

  li {
    padding: 10px 0;
    font-weight: 700;
  }

  li:first-child {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      padding: 20px 35px;
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(3, 1fr);
  }
`
