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
            <Styled.ContactRowKey>Location: </Styled.ContactRowKey>
            <Styled.ContactRowValue>Los Angeles, CA</Styled.ContactRowValue>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Phone: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={`tel:+14242405016`}
              target="_blank"
              rel="noopener noreferrer"
            >
              424-240-5016
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>

          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Email: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'mailto:narinsun2020@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              nrs710@gmail.com
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Website: </Styled.ContactRowKey>
            <Styled.ContactRowValueInternalLink to={`/`}>
              narinsun.com
            </Styled.ContactRowValueInternalLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Github: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'https://github.com/ricopella'}
              target="_blank"
              rel="noopener noreferrer"
            >
              @ricopella
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>LinkedIn: </Styled.ContactRowKey>
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
            <Styled.ResumeSkillKey>CSS</Styled.ResumeSkillKey>
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
            <Styled.ResumeSkillKey>Redux</Styled.ResumeSkillKey>
            <Styled.ResumeSkillValue>
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
        </Styled.ResumeSkillsBody>
      </>
    )
  }

  function renderExperience() {
    return (
      <Styled.WorkExperience>
        <Styled.ResumeMainBodyHeading>Experience</Styled.ResumeMainBodyHeading>
        <Styled.ExperienceBody>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Front-End Developer II`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://fanai.io/'}
                target="_blank"
                rel="noopener noreferrer"
                title="FanAI Inc."
              >
                FanAI Inc.
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>Dec 2019 - Mar 2020</Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceUl>
              <Styled.ExperienceListItem>
                Created data visualizations and dashboards built with Redux &
                Highcharts. Examples: social following & interactions (twitter &
                twitch), demographics, purchase behaviors, and cookie tracking
                analytics
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Converted desktop only application to mobile friendly and fully
                responsive using React-Responsive and CSS Grid, added animations
                for page changes and user interactions using Framer-Motion
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Improved UX by reducing network calls by 80% with in-browser
                caching
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Removed 10k lines of code by refactoring class-based components
                to functional components and creating custom react-hooks
              </Styled.ExperienceListItem>
            </Styled.ExperienceUl>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Front-End Developer I`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://fanai.io/'}
                target="_blank"
                rel="noopener noreferrer"
                title="FanAI Inc."
              >
                FanAI Inc.
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>Dec 2017 - Dec 2019</Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceUl>
              <Styled.ExperienceListItem>
                One of two Front-End contributors towards the full-cycle of new
                feature development with React & TypeScript, designed for scale
                with consideration of UI/UX technical feasibility
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Developed internal tooling such as account management
                (firebase), database management GUI, and tracking custom google
                analytics behaviors
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Added Storybook to document atomically-designed components &
                standardize custom design system
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                ScrumMaster: Facilitate sprint ceremonies, and improve
                development processes
              </Styled.ExperienceListItem>
            </Styled.ExperienceUl>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Software Engineer & ScrumMaster`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://imationsoft.com'}
                target="_blank"
                rel="noopener noreferrer"
                title="iMationSoft"
              >
                iMationSoft
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>Oct 2017 - Dec 2017</Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceUl>
              <Styled.ExperienceListItem>
                Created an API service with Node.JS and Express.JS that
                automated inventory and sales management with Jet.com, Amazon,
                Ebay, and Etsy
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                ScrumMaster: Planned sprint releases for team of six engineers
                and stakeholders
              </Styled.ExperienceListItem>
            </Styled.ExperienceUl>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Teacher Assistant`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://bootcamp.uclaextension.edu/coding/'}
                target="_blank"
                rel="noopener noreferrer"
                title="UCLA Bootcamp"
              >
                UCLA Extension
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>
                Sept 2017 - Dec 2017
              </Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceUl>
              <Styled.ExperienceListItem>
                Mentored 30 students to develop critical thinking and problem
                solving skills
              </Styled.ExperienceListItem>
            </Styled.ExperienceUl>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Freelance Web Developer`}
              </Styled.ExperienceTitle>
              {/* TODO: update to Link component */}
              <Styled.ExperienceCompanyLink
                href={''}
                target="_blank"
                rel="noopener noreferrer"
                title="Freelance Web Developer"
              >
                narinsun.com
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>2017 - Present</Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
            <Styled.ExperienceUl>
              <Styled.ExperienceListItem>
                Develop consumer-facing mobile first web applications
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Create robust databases with server languages for CRUD
                functionality
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Integration of third party APIs to ensure technical feasibility
                of UI/UX
              </Styled.ExperienceListItem>
              <Styled.ExperienceListItem>
                Identify the best framework or tools to fit client needs.
                Examples: Shopify, Wix, Squarespace, WordPress, etc.
              </Styled.ExperienceListItem>
            </Styled.ExperienceUl>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Sr. Client Manager`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://kforce.com'}
                target="_blank"
                rel="noopener noreferrer"
                title="Kforce"
              >
                Kforce, Inc.
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>Aug 2015 - Oct 2017</Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
          </Styled.ExperienceItem>
          <Styled.ExperienceItem>
            <Styled.ExperienceFirstTitleRow>
              <Styled.ExperienceTitle>
                {`Vice President, Sales & Project Management`}
              </Styled.ExperienceTitle>
              <Styled.ExperienceCompanyLink
                href={'https://pseagency.com'}
                target="_blank"
                rel="noopener noreferrer"
                title="PSE Agency"
              >
                PSE Agency
              </Styled.ExperienceCompanyLink>
              <Styled.ExperienceYear>
                July 2009 - Aug 2015
              </Styled.ExperienceYear>
            </Styled.ExperienceFirstTitleRow>
          </Styled.ExperienceItem>
        </Styled.ExperienceBody>
      </Styled.WorkExperience>
    )
  }

  function renderEducation() {
    return (
      <Styled.Education>
        <Styled.ResumeBodyHeading>Education</Styled.ResumeBodyHeading>
        <Styled.EducationBody>
          <Styled.EducationItem>
            <Styled.EducationItemTitle>
              UCLA Extension
            </Styled.EducationItemTitle>
            <Styled.EducationItemSubTitle>
              Full-Stack Web Development Certification
            </Styled.EducationItemSubTitle>
            <Styled.EducationItemDate>2017</Styled.EducationItemDate>
          </Styled.EducationItem>
          <Styled.EducationItem>
            <Styled.EducationItemTitle>
              Johnson & Wales University
            </Styled.EducationItemTitle>
            <Styled.EducationItemSubTitle>
              Bachelor of Arts
            </Styled.EducationItemSubTitle>
            <Styled.EducationItemNote>
              + GPA of 3.8 4.0
            </Styled.EducationItemNote>
            <Styled.EducationItemDate>2005 - 2009</Styled.EducationItemDate>
          </Styled.EducationItem>
          <Styled.EducationItem>
            <Styled.EducationItemTitle>
              Scrum Alliance
            </Styled.EducationItemTitle>
            <Styled.EducationItemSubTitle>
              Certified ScrumMaster
            </Styled.EducationItemSubTitle>
            <Styled.EducationItemDate>2018</Styled.EducationItemDate>
          </Styled.EducationItem>
        </Styled.EducationBody>
      </Styled.Education>
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
              {renderEducation()}
            </Styled.ResumeBody>
          </Styled.ResumeWrapper>
        </SlideUpElement>
      </Styled.ResumeContainer>
    </>
  )
}

export default Resume
