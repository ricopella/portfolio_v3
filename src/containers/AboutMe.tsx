import React from 'react'
import styled from '@emotion/styled'
import Page from '../components/Page'
import { borders, shadows, colors, fonts } from '../styles/variables'
import TerminalCommand from '../components/TerminalCommand'

const TerminalContainer = styled.div`
  display: grid;
  grid-template-rows: 1.875rem max-content;
  grid-template-columns: 1fr;
  max-width: 56.25rem;
  align-self: center;
  justify-self: center;
  box-shadow: ${shadows.box};
`
const TerminalHeaderTitle = styled.div`
  color: ${colors.gray.dark};
  align-self: center;
  justify-self: center;
`

const TerminalHeader = styled.div`
  background-color: ${colors.terminalHeader};
  border-radius: ${borders.large};
  max-height: 1.875rem;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`

const TerminalBody = styled.div`
  background-color: ${colors.terminalBackground};
  border-radius: ${borders.medium};
  box-shadow: ${shadows.box};
  font-family: ${fonts.monospace};
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
`

const TerminalHeaderActionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 0.3125rem;
  height: 1.875rem;
  align-items: center;
  padding-left: 0.625rem;
`

const TerminalHeaderActionBalls = styled.div`
  height: 0.9375rem;
  width: 0.9375rem;
  border-radius: 50%;
`

const AboutMeMain = () => (
  <Page
    id="about-me"
    style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: colors.header,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'max-content max-content',
      gridRowGap: '3.75rem',
      alignContent: 'center',
      justifyContent: 'center',
    }}
  >
    <h1
      style={{
        fontSize: '3rem',
        textAlign: 'center',
        textDecoration: 'underline',
        color: colors.gray.dark,
      }}
    >
      {`about me`.toUpperCase()}
    </h1>
    <TerminalContainer>
      <TerminalHeader>
        <TerminalHeaderActionContainer>
          <TerminalHeaderActionBalls
            style={{ backgroundColor: colors.terminalActionClose }}
          />
          <TerminalHeaderActionBalls
            style={{ backgroundColor: colors.terminalActionMinimize }}
          />
          <TerminalHeaderActionBalls
            style={{ backgroundColor: colors.terminalActionExpand }}
          />
        </TerminalHeaderActionContainer>
        <TerminalHeaderTitle>
          admin@nrs-portfolio: ~/About_Me
        </TerminalHeaderTitle>
      </TerminalHeader>
      <TerminalBody>
        <TerminalCommand
          question={'current_location'}
          answer={'"Los Angeles, CA"'}
        />
        <TerminalCommand
          question={'contact_information'}
          answer={'nrs710@gmail.com'}
          href={'mailto:nrs710@gmail.com'}
        />
        <TerminalCommand
          question={'roles'}
          answer={
            '["Front-End Web Developer", "Freelancer", "Certified Scrum Master"]'
          }
        />
        <TerminalCommand
          question={'types_of_work'}
          answer={
            '["Complex web-apps", "Data visualizations in the browser", "Small business websites", "Shopify customizations", "Mobile apps"]'
          }
        />
        <TerminalCommand
          question={'most_recent_tech_stack'}
          answer={
            '["TypeScript", "React", "Highcharts", "PostCSS", "Jest/Enzyme"]'
          }
        />
        <TerminalCommand
          question={'interests || hobbies'}
          answer={
            '["Turntablism", "Record Collecting", "Music Production", Olde English Bulldog owner", "Photography", "Boston Sports - Bruins, Red Sox, Patriots, Celtics", "Eating new places", "Coffee", "Tacos"]'
          }
        />
        <TerminalCommand />
      </TerminalBody>
    </TerminalContainer>
  </Page>
)

export default AboutMeMain
