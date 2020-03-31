import React from 'react'
import Page from '../../components/Page/index'
import TerminalCommand from '../../components/TerminalCommand/index'
import Styled from './AboutMe.styles'
import { COLORS } from '../../styles/variables'

const AboutMeMain = () => (
  <Page id="about-me" css={Styled.PageStyles}>
    <h1 css={Styled.PageHeading}>{`about me`.toUpperCase()}</h1>
    <Styled.TerminalContainer>
      <Styled.TerminalHeader>
        <Styled.TerminalHeaderActionContainer>
          <Styled.TerminalHeaderActionBalls
            style={{ backgroundColor: COLORS.terminalActionClose }}
          />
          <Styled.TerminalHeaderActionBalls
            style={{ backgroundColor: COLORS.terminalActionMinimize }}
          />
          <Styled.TerminalHeaderActionBalls
            style={{ backgroundColor: COLORS.terminalActionExpand }}
          />
        </Styled.TerminalHeaderActionContainer>
        <Styled.TerminalHeaderTitle>
          admin@nrs-portfolio: ~/About_Me
        </Styled.TerminalHeaderTitle>
      </Styled.TerminalHeader>
      <Styled.TerminalBody>
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
      </Styled.TerminalBody>
    </Styled.TerminalContainer>
  </Page>
)

export default AboutMeMain
