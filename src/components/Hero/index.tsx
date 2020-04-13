import ImageBackground from './Hero.styles'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const LINEAR_GRADIENT = `linear-gradient(rgba(0, 0, 0, 0.2),
rgba(0, 0, 0, 0.2))`

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
    <ImageBackground
      tag="section"
      fluid={[LINEAR_GRADIENT, image.sharp.fluid]}
      fadeIn="soft"
    />
  )
}

export default Hero
