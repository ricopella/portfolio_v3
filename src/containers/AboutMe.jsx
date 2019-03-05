import React from 'react'
import styled from '@emotion/styled'
import Page from '../components/page'
import { colors, fonts, shadows } from '../styles/variables'
import TerminalCommand from '../components/TerminalCommand'

const TerminalContainer = styled.div`
  display: grid;
  grid-template-rows: 30px max-content;
  grid-template-columns: 1fr;
  max-width: 900px;
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
  border-radius: 10px 10px 0 0;
  max-height: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`

const TerminalBody = styled.div`
  background-color: ${colors.terminalBackground};
  border-radius: 0 0 4px 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.15),
    0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12);
  font-family: ${fonts.monospace};
  width: 100%;
  height: 100%;
  padding: 2rem 2rem;
`

const TerminalHeaderActionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  height: 30px;
  align-items: center;
  padding-left: 10px;
`

const TerminalHeaderActionBalls = styled.div`
  height: 15px;
  width: 15px;
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
      gridRowGap: '60px',
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
          narin@Narin-Portfolio: ~/About_Me
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
          isLink={'mailto:nrs710@gmail.com'}
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
