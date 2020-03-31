import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ImageBackground from './Hero.styles'

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
