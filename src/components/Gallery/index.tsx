import React, { FC } from 'react'
import Image from '../GalleryImage/index'
import { GalleryProps } from '../../types'
import Styled from './Gallery.styles'

const FigureComponent: FC<GalleryProps> = ({
  alt,
  description,
  filename,
  href,
  span,
  style = {},
  title,
}) => (
  <figure css={Styled.EffectPortfolio}>
    <Image
      filename={filename}
      css={Styled.GalleryImage}
      alt={alt}
      style={{ height: '100%', ...style }}
    />
    <figcaption>
      <h2>
        {title}
        {span ? <span>{span}</span> : null}
      </h2>

      <p>{description}</p>
      <Styled.LinkContainer
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      />
    </figcaption>
  </figure>
)

const GalleryMain: FC<{}> = () => (
  <Styled.LayoutContainer>
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
  </Styled.LayoutContainer>
)

export default GalleryMain
