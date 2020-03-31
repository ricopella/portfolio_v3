import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { COLORS, SHADOWS } from '../../styles/variables'

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1.875rem;
  grid-row-gap: 1.875rem;

  @media (max-width: 77.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 51.25rem) {
    grid-template-columns: 1fr;
  }
`

const GalleryImage = css`
  height: 100%;
  width: 100%;
`

const LinkContainer = styled.a`
  & :hover {
    background-color: red;
    cursor: pointer;
  }
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
  LayoutContainer,
  GalleryImage,
  LinkContainer,
  EffectPortfolio,
}
