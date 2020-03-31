import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { COLORS, HEIGHTS } from '../../styles/variables'

const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 3;
  margin: 0 auto;
  max-width: 90%;
  text-align: center;
`

const SocialIcon = styled.div`
  width: 2.5rem;
  justify-self: center;
`

const Image = SocialIcon.withComponent('img')

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.25rem;
  margin-top: 1.25rem;
`

const Anchor = css`
  color: ${COLORS.gray.dark};
  :hover {
    color: ${COLORS.gray.calm};
  }

  @media (max-width: 46.875rem) {
    font-size: 2.5rem;
  }
`

const PageHeading = css`
  align-items: center;
  background-color: ${COLORS.header};
  display: flex;
  height: ${HEIGHTS.CONTACT};
  justify-content: center;
  width: 100vw;
`

const PageTitle = css`
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
`

export default {
  Anchor,
  ContactRow,
  ContactWrapper,
  Image,
  PageHeading,
  PageTitle,
  SocialIcon,
}
