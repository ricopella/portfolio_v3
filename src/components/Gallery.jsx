import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors, shadows } from '../styles/variables'
import Image from '../components/galleryImage'

const StyledLayoutContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const galleryImage = css`
  height: 100%;
  width: 100%;
`

const LinkContainer = styled.a`
  & :hover {
    background-color: red;
    cursor: pointer;
  }
`

const effectPortfolio = css`
  position: relative;
  overflow: hidden;
  margin: 10px auto;
  height: auto;
  cursor: pointer;
  background: ${colors.gray.dark};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${shadows.box};

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
    color: ${colors.white};
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
    padding: 30px;
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
    -webkit-transform: translate3d(0, -80px, 0);
    transform: translate3d(0, -80px, 0);
  }

  & :hover h2 {
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0);
  }

  & :hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figcaption {
    padding: 2em;
    color: ${colors.white};
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

const FigureComponent = ({
  filename,
  alt,
  title,
  span,
  description,
  href,
  style,
}) => (
  <figure css={effectPortfolio}>
    <Image
      filename={filename}
      css={galleryImage}
      alt={alt}
      style={{ height: '100%' }}
    />
    <figcaption>
      <h2>
        {title}
        {span ? <span>{span}</span> : null}
      </h2>

      <p>{description}</p>
      <LinkContainer href={href} target="_blank" rel="noopener noreferrer" />
    </figcaption>
  </figure>
)

const GalleryMain = ({ data }) => (
  <StyledLayoutContainer>
    <FigureComponent
      filename="fanai.png"
      alt="Portfolio - FanAI Inc."
      title="FanAI"
      description="Audience Monetization Platform. Built with TypeScript, React,
  Highcharts."
      href="https://fanai.io"
    />
    <FigureComponent
      filename="md.png"
      alt="Portfolio - Matt Denny's Ale House Restaurant"
      title="Matt"
      span="Denny's"
      description="A fully customized Wix site for a restaurant client."
      href="https://mattdennys.com"
    />
    <FigureComponent
      filename="br.png"
      alt="Portfolio - Base Roots Shop"
      title="Base"
      span="Roots"
      description="A customized Shopify store for an e-commerce client."
      href="https://baserootsshop.com"
    />
    <FigureComponent
      filename="Patientstack.png"
      alt="Portfolio - Patient Stack"
      title="Patient"
      span="Stack"
      description="Patient management system for general practice doctors."
      href="https://patientstack.herokuapp.com/"
    />
    <FigureComponent
      filename="reacting.png"
      alt="Portfolio - Reacting To The Times"
      title="Reacting"
      span="To The Times"
      description="A NY Times Scrapper built with React."
      href="https://reacting-to-the-times.herokuapp.com/"
    />
    <FigureComponent
      filename="splitzease.jpg"
      alt="Portfolio - Splitzease"
      title="Splitz"
      span="Ease"
      description="A React-Native mobile application for splitting bills."
      href="https://github.com/ricopella/splitzease"
    />
    <FigureComponent
      filename="nike.png"
      alt="Portfolio - Nike Trivia"
      title="Nike"
      span="Trivia"
      description="A Nike themed trivia game built with Vanilla JavaScript."
      href="https://codepen.io/Ricopella/full/KvMeza/"
    />
    <FigureComponent
      filename="meta.png"
      alt="Portfolio - Metta Healing Arts and Wellness"
      title="Metta"
      span="Healing Arts and Wellness"
      description="A client site built with Squarespace."
      href="https://mettavt.com/"
    />
    <FigureComponent
      filename="hack.png"
      alt="Portfolio - A cup of hacker noon"
      title="A Cup of"
      span="Hacker Noon"
      description="A web scrapper built with Cherrio, Node, Express, and MongoDB."
      href="https://cup-of-hackernoon.herokuapp.com/#results"
    />
  </StyledLayoutContainer>
)

export default GalleryMain
