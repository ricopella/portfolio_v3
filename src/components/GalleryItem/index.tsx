import DonutChart from '../DonutChart'
import format from 'date-fns/format'
import Image from '../GalleryImage'
import LaunchArrow from '../LaunchArrow'
import React, { FC } from 'react'
import setGithubLanguageData from '../../utils/setGithubLanguageData'
import Styled from './Gallery.styles'
import TagItem from '../TagItem'
import { GalleryProps } from '../../types'

const GalleryItem: FC<GalleryProps> = ({
  alt,
  description,
  filename,
  href,
  myTitle,
  github = null,
  tech,
  title,
  year,
}) => {
  let githubData = null

  if (github) {
    githubData = setGithubLanguageData(github?.languages)
  }

  return (
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
          {github?.url || href ? (
            <LaunchArrow href={github?.url || href} />
          ) : null}
        </Styled.ExperienceTitleRow>
        <Styled.ExperienceMyTitleRow>
          {myTitle ? (
            <Styled.ExperienceMyTitle>{myTitle}</Styled.ExperienceMyTitle>
          ) : null}
          {year ? (
            <Styled.ExperienceMyTitle>
              {myTitle ? '|' : github?.createdAt ? 'Created:' : 'Circa:'}{' '}
              {github?.createdAt
                ? format(new Date(github?.createdAt), 'MM dd yyyy')
                : year}{' '}
              {github?.updatedAt
                ? `Last Updated: ${format(
                    new Date(github?.updatedAt),
                    'MM dd yyyy'
                  )}`
                : ''}
            </Styled.ExperienceMyTitle>
          ) : (
            <div />
          )}
        </Styled.ExperienceMyTitleRow>
        <p>{description}</p>
        {github ? <DonutChart data={githubData} /> : null}
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
}

export default GalleryItem
