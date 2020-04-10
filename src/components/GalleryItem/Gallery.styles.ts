import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'
import { css } from '@emotion/core'

const ExperienceItemWrapper = styled.div`
  display: grid;
  max-width: 46.875rem;

  // custom width to break on desktop when gets close to Gallery Image
  @media (max-width: 66.1875rem) {
    max-width: 25rem;
  }
`

const GalleryImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const GalleryImage = css`
  width: 37.5rem;
`

const ExperienceContentWrapper = styled.div`
  display: grid;
  color: ${COLORS.gray.light};
  grid-row-gap: 1rem;
  margin-top: 1rem;
`

const ExperienceTitleRow = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-column-gap: 0.5rem;

  &:last-child {
    justify-self: end;
  }
`

const ExperienceMyTitleRow = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 0.5rem;
`

const ExperienceTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS.gray.copy};
`

const ExperienceMyTitle = styled.div`
  font-size: 1rem;
`

const TagItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default {
  ExperienceContentWrapper,
  ExperienceItemWrapper,
  ExperienceMyTitle,
  ExperienceMyTitleRow,
  ExperienceTitle,
  ExperienceTitleRow,
  GalleryImage,
  GalleryImageWrapper,
  TagItemsWrapper,
}
