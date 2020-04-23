import styled from '@emotion/styled'
import { BREAKPOINTS, COLORS } from '../../styles/variables'
import { ThemeTypes } from '../../types'

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
// Resume width
const ResumeWrapper = styled.div`
  background-color: ${(props: ThemeTypes) =>
    props.theme.backgroundContentColor};
  border-radius: 0.3125rem;
  box-shadow: 0 -1px 0.625rem rgba(0, 0, 0, 0.75);
  margin: 6rem auto;
  min-height: 100vh;
  padding: 2rem 0;
  width: 66.4375rem;

  @media (max-width: 1150px) {
    margin: 6rem auto;
    width: calc(100vw - 4rem);
  }

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    width: calc(100vw - 2rem);
  }
`

const Heading = styled.div`
  display: grid;
  position: relative;
  width: 100%;
`

const HeadingProfileImageWrapper = styled.div`
  left: 10%;
  position: absolute;
  top: 0;
  z-index: 2;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    left: 4%;
  }
`

const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  height: 12.5rem;
  padding: 4rem 0 2rem 10rem;
  position: absolute;
  right: 0;
  width: 50rem;
  background: rgb(76, 73, 97);
  background: -moz-linear-gradient(
    308deg,
    rgba(76, 73, 97, 0.7721463585434174) 10%,
    rgba(55, 55, 55, 1) 100%
  );
  background: -webkit-linear-gradient(
    308deg,
    rgba(76, 73, 97, 0.7721463585434174) 10%,
    rgba(55, 55, 55, 1) 100%
  );
  background: linear-gradient(
    308deg,
    rgba(76, 73, 97, 0.7721463585434174) 10%,
    rgba(55, 55, 55, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4c4961",endColorstr="#373737",GradientType=1);

  @media (max-width: 1150px) {
    width: 75%;
  }

  @media (max-width: 47.9375rem) {
    height: 10rem;
    padding: 3rem 0 2rem 6rem;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    padding: 3rem 0 2rem 4rem;
  }

  @media (max-width: ${BREAKPOINTS.smRem}) {
    padding-right: 1.5rem;
    justify-items: end;
  }
`

const HeadingText = styled.div`
  font-size: 3rem;
  color: ${COLORS.white};

  &.first {
    font-size: 4rem;

    @media (max-width: ${BREAKPOINTS.mobileOnly}) {
      font-size: 3rem;
    }
  }

  &.last {
    @media (max-width: ${BREAKPOINTS.smRem}) {
      font-size: 2rem;
    }

    @media (max-width: ${BREAKPOINTS.mobileOnly}) {
      font-size: 1.2rem;
    }
  }
`

export default {
  ResumeWrapper,
  ResumeContainer,
  Heading,
  HeadingText,
  HeadingWrapper,
  HeadingProfileImageWrapper,
}
