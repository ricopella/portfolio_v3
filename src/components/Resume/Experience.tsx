import React, { FC } from 'react'
import Styled from './Resume.styles'

const Experience: FC<{}> = () => (
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
            responsive using React-Responsive and CSS Grid, added animations for
            page changes and user interactions using Framer-Motion
          </Styled.ExperienceListItem>
          <Styled.ExperienceListItem>
            Improved UX by reducing network calls by 80% with in-browser caching
          </Styled.ExperienceListItem>
          <Styled.ExperienceListItem>
            Removed 10k lines of code by refactoring class-based components to
            functional components and creating custom react-hooks
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
            feature development with React & TypeScript, designed for scale with
            consideration of UI/UX technical feasibility
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
            ScrumMaster: Facilitate sprint ceremonies, and improve development
            processes
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
            Created an API service with Node.JS and Express.JS that automated
            inventory and sales management with Jet.com, Amazon, Ebay, and Etsy
          </Styled.ExperienceListItem>
          <Styled.ExperienceListItem>
            ScrumMaster: Planned sprint releases for team of six engineers and
            stakeholders
          </Styled.ExperienceListItem>
        </Styled.ExperienceUl>
      </Styled.ExperienceItem>
      <Styled.ExperienceItem>
        <Styled.ExperienceFirstTitleRow>
          <Styled.ExperienceTitle>{`Teacher Assistant`}</Styled.ExperienceTitle>
          <Styled.ExperienceCompanyLink
            href={'https://bootcamp.uclaextension.edu/coding/'}
            target="_blank"
            rel="noopener noreferrer"
            title="UCLA Bootcamp"
          >
            UCLA Extension
          </Styled.ExperienceCompanyLink>
          <Styled.ExperienceYear>Sept 2017 - Dec 2017</Styled.ExperienceYear>
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
            Create robust databases with server languages for CRUD functionality
          </Styled.ExperienceListItem>
          <Styled.ExperienceListItem>
            Integration of third party APIs to ensure technical feasibility of
            UI/UX
          </Styled.ExperienceListItem>
          <Styled.ExperienceListItem>
            Identify the best framework or tools to fit client needs. Examples:
            Shopify, Wix, Squarespace, WordPress, etc.
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
          <Styled.ExperienceYear>July 2009 - Aug 2015</Styled.ExperienceYear>
        </Styled.ExperienceFirstTitleRow>
      </Styled.ExperienceItem>
    </Styled.ExperienceBody>
  </Styled.WorkExperience>
)

export default Experience
