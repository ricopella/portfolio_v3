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
  padding: 1rem 0;
  width: 210mm;

  @media (max-width: ${BREAKPOINTS.resumeFirstBreak}) {
    width: calc(100vw - 2rem);
    height: 100%;
  }
`

const ResumeBody = styled.div`
  display: grid;
  grid-row: 2;
  grid-column: 1/-1;
  grid-template-columns: 13.5rem 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-areas:
    'contact workExperience'
    'skills workExperience'
    'education workExperience';

  @media (max-width: ${BREAKPOINTS.smRem}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);
    grid-template-areas:
      'contact'
      'skills'
      'workExperience'
      'education';
  }
`

const ResumeBodyHeading = styled.div`
  background-color: ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  height: 2rem;
  width: 80%;
  color: ${(props: ThemeTypes) => props.theme.resumeHeadingDesktop};
  padding: 0 0 0 1rem;
  line-height: 2rem;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    background-color: transparent;
    height: 2rem;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    color: ${(props: ThemeTypes) => props.theme.resumeHeadingMobile};
    padding: 0 0;
    line-height: 2rem;
    font-size: 1.5rem;
    border-bottom: 0.125rem solid
      ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  }
`

const ResumeMainBodyHeading = styled.div`
  padding-top: 0.2rem;
  font-size: 1.5rem;
  border-bottom: 0.125rem solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  color: ${(props: ThemeTypes) => props.theme.colorCalm};
  height: 2rem;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.smRem}) {
    margin: 0 0;
  }
`

// Contact Info
const Contact = styled.div`
  display: grid;
  grid-area: contact;
  border-right: 0.125rem solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 1rem;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    border-right: none;
  }
`

const ContactBody = styled.div`
  display: grid;
  grid-template-rows: repeat(6, max-content);
`

const ContactRowItem = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: max-content 1fr;
  padding: 0 1rem;
  grid-column-gap: 0.5rem;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    border-bottom: 1px solid
      ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
    width: calc(100% - 2rem);
    margin: 0 1rem;
    padding: 0 0;
  }
`

const ContactRowKey = styled.div`
  color: ${(props: ThemeTypes) => props.theme.color};
  font-size: 0.875rem;
`

const ContactRowValue = styled.div`
  color: ${(props: ThemeTypes) => props.theme.color};
  font-size: 0.875rem;
  justify-self: end;
`

const ContactRowValueLink = styled(OutboundLink)`
  font-size: 0.875rem;
  justify-self: end;
  color: ${(props: ThemeTypes) => props.theme.actionColor};
`

const ContactRowValueInternalLink = styled(Link)`
  font-size: 0.875rem;
  justify-self: end;
  color: ${(props: ThemeTypes) => props.theme.actionColor};
`

// Skills
const Skills = styled.div`
  display: grid;
  grid-area: skills;
  border-right: 0.125rem solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};

  @media (max-width: ${BREAKPOINTS.smRem}) {
    border-right: none;
  }
`

const ResumeSkillsBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 1rem 1rem 0 1rem;
  grid-row-gap: 0.2rem;
`

const ResumeSkillRow = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 1fr;
  border-bottom: 1px solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
`

const ResumeSkillKey = styled.div`
  font-size: 0.875rem;
  color: ${(props: ThemeTypes) => props.theme.color};
  grid-column: 2;
  grid-row: 1;
`

const ResumeSkillValue = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-template-rows: 1fr;
  grid-column: 1;
  grid-row: 1;
  align-items: center;
`

const Star = styled.i`
  position: relative;

  display: inline-block;
  width: 0;
  height: 0;

  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;

  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid ${(props: ThemeTypes) => props.theme.actionColor};
  border-left: 0.3em solid transparent;

  /* Controls the size of the stars. */
  font-size: 7px;

  &:before,
  &:after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid ${(props: ThemeTypes) => props.theme.actionColor};
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`

// Experience
const WorkExperience = styled.div`
  display: grid;
  grid-area: workExperience;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 0.5rem;
  padding-right: 1rem;

  @media (max-width: ${BREAKPOINTS.smRem}) {
    margin: 0 1rem;
    padding: 0 0;
  }
`

const ExperienceBody = styled.div`
  display: grid;
  font-size: 0.875rem;
  color: ${(props: ThemeTypes) => props.theme.color};
`

const ExperienceItem = styled.div``

const ExperienceFirstTitleRow = styled.div`
  display: grid;
  grid-template-columns: max-content max-content 1fr;

  @media (max-width: ${BREAKPOINTS.resumeFirstBreak}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
  }
`

const ExperienceSecondTitleRow = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`

const ExperienceTitle = styled.div`
  font-weight: bold;

  &:after {
    content: ' | ';
  }

  @media (max-width: ${BREAKPOINTS.resumeFirstBreak}) {
    justify-self: start;

    &:after {
      content: none;
    }
  }
`

const ExperienceCompanyLink = styled(OutboundLink)`
  font-size: 0.875rem;
  color: ${(props: ThemeTypes) => props.theme.actionColor};
  margin-left: 0.3125rem;

  @media (max-width: ${BREAKPOINTS.resumeFirstBreak}) {
   margin-left: 0;
    }
  }
`

const ExperienceYear = styled.i`
  justify-self: end;

  @media (max-width: ${BREAKPOINTS.resumeFirstBreak}) {
    justify-self: start;
  }
`

const ExperienceUl = styled.ul`
  padding-inline-start: 0.9375rem;
`

const ExperienceListItem = styled.li``

// Education
const Education = styled.div`
  display: grid;
  grid-area: education;
  border-right: 2px solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
  grid-template-rows: repeat(2, max-content);

  @media (max-width: ${BREAKPOINTS.smRem}) {
    border-right: none;
  }
`

const EducationBody = styled.div`
  display: grid;
  font-size: 0.875rem;
  color: ${(props: ThemeTypes) => props.theme.color};
  padding: 1rem 1rem 0 1rem;
  grid-row-gap: 0.5rem;
`

const EducationItem = styled.div`
  display: grid;
`

const EducationItemTitle = styled.div`
  font-weight: bold;
  border-bottom: 1px solid
    ${(props: ThemeTypes) => props.theme.actionBackgroundColor};
`

const EducationItemSubTitle = styled.div``

const EducationItemNote = styled.div`
  font-size: 0.7rem;
`

const EducationItemDate = styled.i``

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
  background: ${(props: ThemeTypes) => props.theme.resumeHeading.background};
  background: ${(props: ThemeTypes) => props.theme.resumeHeading.backgroundWeb};
  background: ${(props: ThemeTypes) => props.theme.resumeHeading.backgroundMoz};
  background: ${(props: ThemeTypes) =>
    props.theme.resumeHeading.backgroundLinear};

  @media (max-width: 71.875rem) {
    width: 79%;
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
  ResumeSkillsBody,
  ResumeSkillRow,
  Star,
  ResumeSkillKey,
  ResumeSkillValue,
  ResumeMainBodyHeading,
  EducationBody,
  ExperienceBody,
  ExperienceFirstTitleRow,
  ExperienceTitle,
  ExperienceSecondTitleRow,
  ExperienceYear,
  ExperienceListItem,
  ExperienceUl,
  ExperienceCompanyLink,
  ExperienceItem,
  EducationItem,
  EducationItemTitle,
  EducationItemSubTitle,
  EducationItemDate,
  EducationItemNote,
}
