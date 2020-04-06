import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { COLORS } from '../../styles/variables'

const ProfileImageOuterBorder = styled('div')`
  display: grid;
  align-items: center;
  background-color: ${COLORS.gray.light};
  border-radius: 50%;
  grid-template-columns: 1fr;
  height: 13.125rem;
  justify-items: center;
  width: 13.125rem;

  // custom width that fixes a responsive bug for iPad
  @media (max-width: 47.9375rem) {
    height: 10rem;
    width: 10rem;
  }
`

const ProfileImage = styled(Img)`
  border-radius: 50%;
  border: 0.25rem solid white;
`

export default {
  ProfileImage,
  ProfileImageOuterBorder,
}
