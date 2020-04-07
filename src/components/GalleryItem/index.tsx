import Image from '../GalleryImage/index'
import React, { FC } from 'react'
import Styled from './Gallery.styles'
import { GalleryProps } from '../../types'

const GalleryItem: FC<GalleryProps> = ({
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

export default GalleryItem
