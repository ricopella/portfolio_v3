import styled from '@emotion/styled'
import { BREAKPOINTS, DIMENSIONS } from '../../styles/variables'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: ${DIMENSIONS.resume.heading.height} 1fr;
  height: 297mm;
  margin: 6rem auto;
  min-height: 100vh;
  padding: 2rem 0;
  width: 210mm;

  @media (max-width: 71.875rem) {
    margin: 6rem auto;
    width: calc(100vw - 4rem);
  }

  @media (max-width: ${BREAKPOINTS.mdRem}) {
    width: calc(100vw - 2rem);
  }
`

const ResumeBody = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 1/-1;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'contact workExperience'
    'skills education';
`

const ResumeBodyHeading = styled.div`
  background-color: ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  height: 2rem;
  width: 80%;
  color: ${(props: ThemeTypes) => props.theme.colorCalm};
  padding: 0 0 0 1rem;
  line-height: 2rem;
`

// Contact Info
const Contact = styled.div`
  display: grid;
  width: 12.5rem;
  grid-area: contact;
  border-right: 0.125rem solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 1rem;
`

const ContactBody = styled.div`
  display: grid;
  grid-template-rows: repeat(6, max-content);
  grid-row-gap: 1rem;
`

const ContactRowItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  padding-left: 1rem;
`

const ContactRowKey = styled.div`
  color: ${(props: ThemeTypes) => props.theme.color};
  font-size: 0.875rem;
`

const ContactRowValue = styled.div`
  color: ${(props: ThemeTypes) => props.theme.color};
  font-size: 0.875rem;
`

const ContactRowValueLink = styled(OutboundLink)`
  font-size: 0.875rem;
`

const ContactRowValueInternalLink = styled(Link)`
  font-size: 0.875rem;
`

const Skills = styled.div`
  display: grid;
  width: 20%;
  grid-area: skills;
  border-right: 0.125rem solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  width: 12.5rem;
`

const WorkExperience = styled.div`
  display: grid;
  width: 60%;
  grid-area: workExperience;
`

const Education = styled.div`
  display: grid;
  width: 60%;
  grid-area: education;
`

// HEADING
const Heading = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-row: 1;
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

const HeadingProfileImageOuter = css`
  height: ${DIMENSIONS.resume.heading.height};
  width: ${DIMENSIONS.resume.heading.height};
`

const HeadingProfileImageInner = css`
  height: calc(${DIMENSIONS.resume.heading.height} - 1rem) !important;
  width: calc(${DIMENSIONS.resume.heading.height} - 1rem) !important;
`

const HeadingWrapper = styled.div`
  display: grid;
  background: rgb(76, 73, 97);
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1.5rem);
  grid-row-gap: 1.5rem;
  height: ${DIMENSIONS.resume.heading.height};
  padding: 0 0 0 ${DIMENSIONS.resume.heading.height};
  align-content: center;
  position: absolute;
  right: 0;
  width: 40rem;
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

  @media (max-width: 71.875rem) {
    width: 75%;
  }

  @media (max-width: 47.9375rem) {
    height: ${DIMENSIONS.resume.heading.height};
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
  color: ${(props: ThemeTypes) => props.theme.colorCalm};

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
  Contact,
  Skills,
  WorkExperience,
  Education,
  ResumeBody,
  HeadingProfileImageInner,
  HeadingProfileImageOuter,
  ResumeBodyHeading,
  ContactRowItem,
  ContactRowKey,
  ContactRowValue,
  ContactBody,
  ContactRowValueLink,
  ContactRowValueInternalLink,
}
