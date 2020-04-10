import Image from '../GalleryImage'
import LaunchArrow from '../LaunchArrow'
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
  tech,
  title,
  year,
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
        {href ? <LaunchArrow href={href} /> : null}
      </Styled.ExperienceTitleRow>
      <Styled.ExperienceMyTitleRow>
        {myTitle ? (
          <Styled.ExperienceMyTitle>{myTitle}</Styled.ExperienceMyTitle>
        ) : null}
        {year ? (
          <Styled.ExperienceMyTitle>
            {myTitle ? '|' : 'Circa:'} {year}
          </Styled.ExperienceMyTitle>
        ) : (
          <div />
        )}
      </Styled.ExperienceMyTitleRow>
      <p>{description}</p>
      <Styled.TagItemsWrapper>
        {tech && tech.length
          ? tech.map((item: string, idx: number) => (
              <TagItem key={`tag_item_${item}_${idx}`} title={item} />
            ))
          : null}
      </Styled.TagItemsWrapper>
    </Styled.ExperienceContentWrapper>
  </Styled.ExperienceItemWrapper>
)

export default GalleryItem
