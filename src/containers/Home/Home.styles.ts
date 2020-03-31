import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { motion } from 'framer-motion'

const FullPage = styled.div`
  display: grid;
  background-size: cover;
  background: transparent;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  position: relative;
  width: 100%;
`

const IntroTextContainer = styled(motion.div)`
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  display: grid;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-template-columns: auto-fill;
  grid-template-rows: 3.75rem 0.625rem 3.75rem;
  justify-content: center;
  z-index: 2;

  @media (max-width: 46.875rem) {
    grid-template-rows: 2.25rem 3.75rem 0px;
  }
`

const IntroText = styled.div`
  align-self: center;
  color: ${COLORS.header};
  font-size: 4rem;
  justify-self: center;
  text-align: center;
  width: calc(100vw + (1.5rem * 2));

  @media (max-width: 46.875rem) {
    font-size: 2rem;
  }
`

const Description = styled(IntroText)`
  font-size: 3rem;

  @media (max-width: 46.875rem) {
    word-wrap: break-word;
    font-size: 1rem;
    padding: 7% 0;
  }
`

const Break = styled.div`
  align-self: center;
  background-color: ${COLORS.white};
  height: 4px;
  justify-self: center;
  width: 37.5rem;

  @media (max-width: 46.875rem) {
    width: 80%;
  }
`

export default {
  Break,
  Description,
  FullPage,
  IntroText,
  IntroTextContainer,
}
