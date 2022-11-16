import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContentWrapper = styled(motion.div)`
  margin-top: 80px;
  margin-bottom: 100px;
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1420px;
    margin: 130px auto 0 auto;
    padding: 0 100px;
  }
`
