import React from 'react'
import Page from '../components/page'
import Container from '../components/container'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors, heights } from '../styles/variables'

// Assets
import github from '../images/github.svg'
import twitter from '../images/circle.svg'
import insta from '../images/insta.svg'
import linkedin from '../images/in.svg'

const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex: 3;
  margin: 0 auto;
  max-width: 90%;
  text-align: center;
`

const socialIcon = styled.div`
  width: 40px;
  justify-self: center;
`

const Image = socialIcon.withComponent('img')

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin-top: 20px;
`

const anchor = css`
  color: ${colors.white};
  :hover {
    color: ${colors.gray.light};
  }
`

const SkillsContainer = () => (
  <Page
    id="contact"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: heights.contact,
      width: '100vw',
      backgroundColor: colors.limeGreen,
    }}
  >
    <ContactWrapper>
      <Container>
        <h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            textDecoration: 'underline',
          }}
        >
          <a className={anchor} href="mailto:nrs710@gmail.com" target="__top">
            {`get in touch`.toUpperCase()}
          </a>
        </h1>
        <ContactRow>
          <a
            href="https://github.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} />
          </a>
          <a
            href="https://www.instagram.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={insta} />
          </a>
          <a
            href="https://twitter.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/nsundara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} />
          </a>
        </ContactRow>
      </Container>
    </ContactWrapper>
  </Page>
)

export default SkillsContainer
