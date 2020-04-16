import Image from 'gatsby-image'
import ReactAudioPlayer from 'react-audio-player'
import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Top3Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-column: 1/-1;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 3rem;
  }

  @media (max-width: 40.625rem) {
    grid-template-columns: 1fr;
  }
`

const Top3AudioPlayer = styled(ReactAudioPlayer)`
  @media (max-width: 85rem) {
    max-width: 15.625rem;
  }
  @media (max-width: 62.5rem) {
    max-width: 12.5rem;
  }

  @media (max-width: 50rem) {
    max-width: 15.625rem;
  }

  @media (max-width: 650px) {
    max-width: 12.5rem;
  }
`

const Type3MaskWrapper = styled.div`
  background-color: transparent;
  border-radius: 0.3125rem;
  box-sizing: border-box;
  display: none;
  height: 100%;
  left: 0;
  max-width: 18.75rem;
  position: absolute;
  top: 0;
  transition: background-color 350ms ease;
  width: 100%;
  z-index: 2;

  @media (max-width: 85rem) {
    max-width: 15.625rem;
  }

  @media (max-width: 62.5rem) {
    max-width: 12.5rem;
  }

  @media (max-width: 50rem) {
    max-width: 15.625rem;
  }

  @media (max-width: 40.625rem) {
    max-width: 12.5rem;
  }
`

const Top3ItemImage = styled(Image)`
  border-radius: 5px;
  grid-column: 1/-1;
  grid-row: 1/-1;
  max-width: 18.75rem;

  @media (max-width: 85rem) {
    max-width: 15.625rem;
  }
  @media (max-width: 1000px) {
    max-width: 12.5rem;
  }

  @media (max-width: 50rem) {
    max-width: 15.625rem;
  }

  @media (max-width: 40.625rem) {
    max-width: 12.5rem;
  }
`

const Hover = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr;
  height: 12.5rem;
  max-width: 18.75rem;
  opacity: 0;
  padding: 1.25rem 1.25rem 0 1.25rem;
  transition: opacity 350ms ease;

  @media (max-width: 85rem) {
    max-width: 15.625rem;
    height: 10rem;
  }
  @media (max-width: 62.5rem) {
    max-width: 12.5rem;
    height: 9rem;
  }

  @media (max-width: 50rem) {
    max-width: 18.75rem;
    height: 12rem;
  }

  @media (max-width: 40.625rem) {
    max-width: 12.5rem;
    height: 9rem;
  }
`

const Top3Row = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  transform: translate3d(0, 3.125rem, 0);
  transition: transform 350ms ease;
`

const FirstTop3Row = styled(Top3Row)`
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: bold;
`

const LastTop3Row = styled(Top3Row)`
  align-self: end;

  @media (max-width: 62.5rem) {
    font-size: 0.5rem;
  }
`

const Top3Link = styled(OutboundLink)`
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: bold;
  transform: translate3d(0, 3.125rem, 0);
  transition: transform 350ms ease;
`

const Top3Item = styled.div`
  display: grid;
  align-content: center;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  margin: 0 auto;
`

const Top3ImageWrapper = styled.div`
  position: relative;
  &:hover ${Type3MaskWrapper} {
    background-color: rgba(0, 0, 0, 0.5);
    display: initial;
  }

  &:hover ${Top3ItemImage} {
    transform: translate3d(0, 0, 0);
  }

  &:hover ${Hover} {
    opacity: 1;
  }
`

export default {
  Top3Wrapper,
  Top3Item,
  Top3ItemImage,
  Type3MaskWrapper,
  Hover,
  Top3Row,
  Top3ImageWrapper,
  Top3Link,
  LastTop3Row,
  FirstTop3Row,
  Top3AudioPlayer,
}
