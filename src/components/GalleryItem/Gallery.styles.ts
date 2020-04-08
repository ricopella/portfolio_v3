import styled from '@emotion/styled'
import { COLORS, SHADOWS } from '../../styles/variables'
import { css } from '@emotion/core'

const GalleryImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 46.875rem;

  // custom width to break on desktop when gets close to Gallery Image
  @media (max-width: 66.1875rem) {
    max-width: 25rem;
  }
`

const GalleryImage = css`
  width: 37.5rem;
`

const LinkContainer = styled.a`
  & :hover {
    background-color: red;
    cursor: pointer;
  }
`

const ExperienceItemWrapper = styled.div`
  display: grid;
`

const EffectPortfolio = css`
  position: relative;
  overflow: hidden;
  margin: 0.625rem auto;
  height: auto;
  cursor: pointer;
  background: ${COLORS.gray.dark};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${SHADOWS.box};

  & .gatsby-image-wrapper,
  & .gatsby-image-wrapper {
    position: relative;
    display: block;
    opacity: 0.75;
  }

  .gatsby-image-wrapper {
    object-fit: cover;
  }

  & h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    color: ${COLORS.white};
  }
  & h2 span {
    font-weight: 700;
  }
  & h2,
  & p {
    margin: 0;
  }
  & p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }

  & .gatsby-image-wrapper,
  & .gatsby-image-wrapper,
  & h2 {
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
  }
  & .gatsby-image-wrapper,
  & .gatsby-image-wrapper {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  & h2,
  & p {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1.875rem;
  }
  & p {
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, $fifty, 0);
    transform: translate3d(0, $fifty, 0);
  }

  & :hover .gatsby-image-wrapper {
    -webkit-transform: translate3d(0, -5rem, 0);
    transform: translate3d(0, -80px, 0);
  }

  & :hover h2 {
    -webkit-transform: translate3d(0, -6.25rem, 0);
    transform: translate3d(0, -6.25rem, 0);
  }

  & :hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figcaption {
    padding: 2em;
    color: ${COLORS.white};
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  figcaption::before,
  figcaption::after {
    pointer-events: none;
  }
  figcaption,
  figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }
  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
  }
  h2 span {
    font-weight: 700;
  }
  h2,
  p {
    margin: 0;
  }
  p {
    letter-spacing: 1px;
    font-size: 68.5%;
  }
`

export default {
  GalleryImage,
  GalleryImageWrapper,
  LinkContainer,
  EffectPortfolio,
  ExperienceItemWrapper,
}
