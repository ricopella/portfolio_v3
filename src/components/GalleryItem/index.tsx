import Image from '../GalleryImage'
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
  <Styled.ExperienceItemWrapper>
    <Styled.GalleryImageWrapper>
      {filename ? (
        <Image filename={filename} css={Styled.GalleryImage} alt={alt} />
      ) : (
        <div />
      )}
    </Styled.GalleryImageWrapper>
    <h2>{`${title} ${span ? span : ''}`}</h2>
    <p>{description}</p>
    <Styled.LinkContainer
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    />
  </Styled.ExperienceItemWrapper>
)

export default GalleryItem
