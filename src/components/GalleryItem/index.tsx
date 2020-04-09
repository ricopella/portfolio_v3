import Image from '../GalleryImage'
import React, { FC } from 'react'
import Styled from './Gallery.styles'
import TagItem from '../TagItem'
import { GalleryProps } from '../../types'

const GalleryItem: FC<GalleryProps> = ({
  alt,
  description,
  filename,
  href,
  myTitle,
  year,
  tech,
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
    <Styled.ExperienceContentWrapper>
      <Styled.ExperienceTitleRow>
        <Styled.ExperienceTitle>{title}</Styled.ExperienceTitle>
        {myTitle ? (
          <Styled.ExperienceMyTitle>| {myTitle}</Styled.ExperienceMyTitle>
        ) : (
          <div />
        )}
        {year ? (
          <Styled.ExperienceMyTitle>| {year}</Styled.ExperienceMyTitle>
        ) : null}
      </Styled.ExperienceTitleRow>
      <p>{description}</p>
      <Styled.TagItemsWrapper>
        {tech && tech.length
          ? tech.map((item: string, idx: number) => (
              <TagItem key={`tag_item_${item}_${idx}`} title={item} />
            ))
          : null}
      </Styled.TagItemsWrapper>
      <Styled.LinkContainer
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Styled.ExperienceContentWrapper>
  </Styled.ExperienceItemWrapper>
)

export default GalleryItem
