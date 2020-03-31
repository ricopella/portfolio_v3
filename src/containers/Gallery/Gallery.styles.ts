import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledFullPage = styled.div`
  width: 100%;
  padding: 5%;

  @media (max-width: 750px) {
    padding: 10%;
  }
`

const PageHeading = css`
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
`

export default {
  StyledFullPage,
  PageHeading,
}
