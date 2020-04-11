import styled from '@emotion/styled'
import { COLORS, HEIGHTS } from '../../styles/variables'
import { css } from '@emotion/core'

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
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

const ContactDescription = styled.p`
  max-width: calc(100vw - 23%);
  color: ${COLORS.gray.light};
`

const ContactLink = styled.a`
  color: ${COLORS.terminalBackground};
  font-weight: bold;
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
  ContactDescription,
  ContactLink,
}
