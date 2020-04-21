import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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

  @media (max-width: ${BREAKPOINTS.smRem}) {
    max-width: 100%;
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
  ShowMoreButton,
  MoreAboutMeWrapper,
  ShowMoreButtonWrapper,
}
