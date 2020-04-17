import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import {
  BREAKPOINTS,
  BORDERS,
  SHADOWS,
  COLORS,
  FONTS,
} from '../../styles/variables'

const TerminalContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: 1.875rem max-content;
  grid-template-columns: 1fr;
  max-width: 56.25rem;
  align-self: center;
  justify-self: center;
  box-shadow: ${SHADOWS.box};
  margin-top: 1rem;
`
const TerminalHeaderTitle = styled.div`
  color: ${COLORS.gray.dark};
  align-self: center;
  justify-self: center;
`

const TerminalHeader = styled.div`
  background-color: ${COLORS.terminalHeader};
  border-radius: ${BORDERS.large};
  max-height: 1.875rem;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`

const TerminalBody = styled.div`
  background-color: ${props => props.theme.actionColor};
  border-radius: ${BORDERS.medium};
  box-shadow: ${SHADOWS.box};
  font-family: ${FONTS.monospace};
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
`

const TerminalHeaderActionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 0.3125rem;
  height: 1.875rem;
  align-items: center;
  padding-left: 0.625rem;
`

const TerminalHeaderActionBalls = styled.div`
  height: 0.9375rem;
  width: 0.9375rem;
  border-radius: 50%;
`
const BioContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-column-gap: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 77.75rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    justify-items: center;
    max-width: calc(56.25rem - 10%);
    margin: 0 0;
  }
`

const BioHeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: max-content;
  grid-column-gap: 1.25rem;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const BioHeadingText = styled.div`
  max-width: 15.625rem;
  color: ${props => props.theme.color};

  & h2,
  & h4 {
    color: ${props => props.theme.color};
  }
`
const BioParagraph = styled('p')`
  color: ${props => props.theme.color};
  grid-column: 1 / -1;

  &.first {
    grid-column: 2;
    align-self: end;

    @media (max-width: 77.75rem) {
      grid-column: 1 / -1;
    }
  }
`

const ContactLink = styled(OutboundLink)`
  color: ${props => props.theme.actionColor};

  :hover {
    color: ${props => props.theme.colorCalm};
    transform: scale(1.1);
  }
`

const SpotifyHeading = styled.h4`
  color: ${props => props.theme.color};
  margin: 0 0;
`
const SpotifyHeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1rem;
`

const SpotifySubheading = styled.p`
  color: ${props => props.theme.color};
`

const ShowMoreButtonWrapper = styled.div`
  margin: 0 auto;
  grid-column: 1/-1;
  margin-top: 2rem;
`

const ShowMoreButton = styled(motion.button)`
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  letter-spacing: 0.1rem;
  border-radius: 3.4375rem;
  background-color: ${props => props.theme.actionColor};
  border: none;
`

const MoreAboutMeWrapper = styled(motion.div)`
  grid-column: 1/-1;
`

export default {
  BioContainer,
  BioHeadingText,
  BioHeadingWrapper,
  BioParagraph,
  ContactLink,
  SpotifyHeading,
  SpotifyHeadingWrapper,
  SpotifySubheading,
  TerminalBody,
  TerminalContainer,
  TerminalHeader,
  TerminalHeaderActionBalls,
  TerminalHeaderActionContainer,
  TerminalHeaderTitle,
  ShowMoreButton,
  MoreAboutMeWrapper,
  ShowMoreButtonWrapper,
}
