import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 100vh;
  position: 'unset';
  opacity: 0.95;
  max-width: 100%;
  padding: 0;
  grid-row: 1/-1;
  grid-column: 1/-1;
  min-height: 100vh;

  + * {
    margin-top: 0;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "joseph-ngabo.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" />
  )
}

export default Hero
