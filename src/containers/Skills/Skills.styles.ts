import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { COLORS } from '../../styles/variables'

const ImageWrapper = styled.img`
  max-width: 10%;
  margin: 0 0.375rem;
  padding: 0.3125rem 0.4375rem;

  @media (max-width: 46.875rem) {
    max-width: 21%;

    &.gulp {
      max-width: 14% !important;
    }

    &.firebase {
      max-width: 17% !important;
    }
  }
`

const SkillsWrapper = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  flex: 3;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 77.5rem) {
    flex: 2;
  }

  @media (max-width: 51.25rem) {
    flex: 1;
    padding-top: 10%;
  }
`

const PageHeading = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.header};
`

const PageTitle = css`
  fontsize: 3rem;
  text-align: center;
  text-decoration: underline;
`

export default {
  ImageWrapper,
  SkillsWrapper,
  PageHeading,
  PageTitle,
}
