import Hero from '../Hero'
import ProfileImage from '../ProfileImage'
import React from 'react'
import SlideUpElement from '../SlideUpElement'
import Styled from './Resume.styles'

const Resume = () => {
  function renderHeading() {
    return (
      <Styled.Heading>
        <Styled.HeadingProfileImageWrapper>
          <ProfileImage
            innerStyle={Styled.HeadingProfileImageInner}
            outerStyle={Styled.HeadingProfileImageOuter}
          />
        </Styled.HeadingProfileImageWrapper>
        <Styled.HeadingWrapper>
          <Styled.HeadingText className="first">Narin</Styled.HeadingText>
          <Styled.HeadingText className="last">Sundarabhaya</Styled.HeadingText>
        </Styled.HeadingWrapper>
      </Styled.Heading>
    )
  }

  function renderContact() {
    return (
      <Styled.Contact>
        <Styled.ResumeBodyHeading>Contact</Styled.ResumeBodyHeading>
        <Styled.ContactBody>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>+ Phone: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={`tel:+14242405016`}
              target="_blank"
              rel="noopener noreferrer"
            >
              424-240-5016
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>+ Location: </Styled.ContactRowKey>
            <Styled.ContactRowValue>Los Angeles, CA</Styled.ContactRowValue>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Email: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'mailto:narinsun2020@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              narinsun2020@gmail.com
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>+ Website: </Styled.ContactRowKey>
            <Styled.ContactRowValueInternalLink to={`/`}>
              narinsun.com
            </Styled.ContactRowValueInternalLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>+ Github: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'https://github.com/ricopella'}
              target="_blank"
              rel="noopener noreferrer"
            >
              @ricopella
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>+ LinkedIn: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={`https://www.linkedin.com/in/nsundara/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @nsundara
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
        </Styled.ContactBody>
      </Styled.Contact>
    )
  }

  function renderSkills() {
    return (
      <>
        <Styled.ResumeBodyHeading>Skills</Styled.ResumeBodyHeading>
        <Styled.ResumeSkillsBody>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>React</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>TypeScript</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>JavaScript</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Redux</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Jest</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Testing-Library</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>CSSNext</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Highcharts</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Node.JS</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
          <Styled.ResumeSkillRow>
            <Styled.ResumeSkillKey>Express.JS</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
              <Styled.Star />
              <Styled.Star />
              <Styled.Star />
            </Styled.ResumeSkillValue>
          </Styled.ResumeSkillRow>
        </Styled.ResumeSkillsBody>
      </>
    )
  }

  function renderExperience() {
    return (
      <Styled.WorkExperience>
        <Styled.ResumeMainBodyHeading>Experience</Styled.ResumeMainBodyHeading>
        <Styled.ExperienceBody>
          <Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceTitle>
              {`Front-End Developer II  | `}
            </Styled.ExperienceTitle>
            <Styled.ExperienceCompanyLink
              href={'https://fanai.io/'}
              target="_blank"
              rel="noopener noreferrer"
            >
              FanAI Inc.
            </Styled.ExperienceCompanyLink>
            <Styled.ExperienceYear>Dec 2019 - Mar 2020</Styled.ExperienceYear>
          </Styled.ExperienceFirstTitleRow>
          <Styled.ExperienceSecondTitleRow>
            <Styled.ExperienceTitle>
              Front-End Developer I
            </Styled.ExperienceTitle>
            <Styled.ExperienceYear>Dec 2017 - Dec 2019</Styled.ExperienceYear>
          </Styled.ExperienceSecondTitleRow>
          <Styled.ExperienceUl>
            <Styled.ExperienceListItem>
              One of two Front-End contributors towards the full-cycle of new
              feature development with React & TypeScript, designed for scale
              with consideration of UI/UX technical feasibility
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Created data visualizations and dashboards built with Redux &
              Highcharts. Examples: social following & interactions (twitter &
              twitch), demographics, purchase behaviors, and cookie tracking
              analytics
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Developed internal tooling such as account management (firebase),
              database management GUI, and tracking custom google analytics
              behaviors
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Added Storybook to document atomically-designed components &
              standardize custom design system
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Converted desktop only application to mobile friendly and fully
              responsive using React-Responsive and CSS Grid, added animations
              for page changes and user interactions using Framer-Motion
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Improved UX by reducing network calls by 80% with in-browser
              caching (IndexDB)
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Cut feature delivery of data visualizations in half by
              recommending React-JSX-Highcharts over D3.js
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              Removed 10k lines of code by refactoring class-based components to
              functional components and creating custom react-hooks
            </Styled.ExperienceListItem>
            <Styled.ExperienceListItem>
              ScrumMaster: Facilitate bi-weekly sprint ceremonies, and
              continually improve development processes
            </Styled.ExperienceListItem>
          </Styled.ExperienceUl>
        </Styled.ExperienceBody>
      </Styled.WorkExperience>
    )
  }

  return (
    <>
      <Styled.ResumeContainer>
        <Hero />
        <SlideUpElement style={{ gridArea: `1/1/-1/-1` }}>
          <Styled.ResumeWrapper>
            {renderHeading()}
            <Styled.ResumeBody>
              {renderContact()}
              <Styled.Skills>{renderSkills()}</Styled.Skills>
              {renderExperience()}
              <Styled.Education>
                <Styled.ResumeMainBodyHeading>
                  Education / Certificates
                </Styled.ResumeMainBodyHeading>
              </Styled.Education>
            </Styled.ResumeBody>
          </Styled.ResumeWrapper>
        </SlideUpElement>
      </Styled.ResumeContainer>
    </>
  )
}

export default Resume
