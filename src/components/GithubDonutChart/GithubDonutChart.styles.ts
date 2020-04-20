import styled from '@emotion/styled'
import { BREAKPOINTS } from '../../styles/variables'

const GithubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
`

const GithubWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const GithubKeyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 2rem;
  height: 100%;
  align-content: center;
`

const GithubKeyItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 1rem;
  align-items: center;
`

const GithubKeyColor = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
`

const GithubKeyText = styled.div`
  font-size: 1.2rem;
`

const GithubHeading = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

export default {
  GithubContainer,
  GithubKeyContainer,
  GithubKeyItem,
  GithubKeyColor,
  GithubKeyText,
  GithubWrapper,
  GithubHeading,
}
