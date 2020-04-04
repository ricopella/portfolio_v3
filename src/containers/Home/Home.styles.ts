import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS, Z_INDEX } from '../../styles/variables'
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
  grid-template-columns: 1fr;
  grid-template-rows: 3.75rem 0.625rem 3.75rem max-content;
  justify-content: center;
  z-index: ${Z_INDEX.PAGE_CONTENT};

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-rows: 2.25rem 1.75rem 0;
  }
`

const IntroText = styled.div`
  align-self: center;
  color: ${COLORS.white};
  font-size: 4rem;
  justify-self: center;
  text-align: center;
  margin: 0 1.5rem;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    font-size: 2rem;
    max-width: calc(100vw - 10%);
    line-height: 2rem;
  }
`

const Description = styled(IntroText)`
  font-size: 3rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
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

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    width: 40%;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    width: 60%;
  }
`

export default {
  Break,
  Description,
  FullPage,
  IntroText,
  IntroTextContainer,
}
