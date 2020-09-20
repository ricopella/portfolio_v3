import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS, Z_INDEX } from '../../styles/variables'
import { motion } from 'framer-motion'

const FullPage = styled(motion.div)`
  background-size: cover;
  background: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  position: relative;
  width: 100%;
`

const IntroTextContainer = styled(motion.div)`
  -ms-flex-line-pack: center;
  -ms-flex-pack: center;
  -webkit-align-content: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  align-content: center;
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  justify-content: center;
  margin: 0 10%;
  z-index: ${Z_INDEX.PAGE_CONTENT};

  @media (max-width: ${BREAKPOINTS.tabletPro}) {
    grid-template-rows: 2.25rem 1.75rem;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    margin: 0 5%;
    padding-bottom: 50%;
    max-width: calc(100vw - 10%);
  }
`

const IntroTextName = styled.div`
  color: ${COLORS.homeBanner};
  font-size: 3.5rem;
  font-weight: bold;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    font-size: 2rem;
  }
`

const IntroContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, max-content);
  line-height: 1.2;
  font-size: 3rem;
  @media (max-width: ${BREAKPOINTS.mdRem}) {
    word-wrap: break-word;
    font-size: 1.25rem;
  }
`

const IntroContentText = styled.div`
  color: ${props => props.theme.color};
  @media (max-width: ${BREAKPOINTS.smRem}) {
    max-width: 17.5rem;
  }
`

const IntroSubDescription = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.color};
  margin: 2rem 0;
  @media (max-width: ${BREAKPOINTS.smRem}) {
    display: none;
  }
`

export default {
  IntroContentWrapper,
  FullPage,
  IntroTextName,
  IntroTextContainer,
  IntroContentText,
  IntroSubDescription,
}
