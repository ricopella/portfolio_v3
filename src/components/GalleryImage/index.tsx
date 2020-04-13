import Img from 'gatsby-image'
import React, { FC } from 'react'
import { GalleryImageProps } from '../../types'
import { graphql, useStaticQuery } from 'gatsby'

/*
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const GalleryImage: FC<GalleryImageProps> = ({
  alt,
  filename,
  css,
  style = {},
}) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 750) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  const image = images.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })

  const imageSizes = image.node.childImageSharp.sizes

  return (
    <Img
      css={css}
      alt={alt}
      sizes={imageSizes ? imageSizes : 0}
      style={style}
    />
  )
}
export default GalleryImage
