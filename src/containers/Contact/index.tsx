import React from 'react'
import Page from '../../components/Page'
import Container from '../../components/Container'
import Styled from './Contact.styles'

// Assets
import github from '../../images/github.svg'
import twitter from '../../images/circle.svg'
import insta from '../../images/insta.svg'
import linkedin from '../../images/in.svg'

const SkillsContainer = () => (
  <Page id="contact" css={Styled.PageHeading}>
    <Styled.ContactWrapper>
      <Container>
        <h1 css={Styled.PageTitle}>
          <a css={Styled.Anchor} href="mailto:nrs710@gmail.com" target="__top">
            {`get in touch`.toUpperCase()}
          </a>
        </h1>
        <Styled.ContactRow>
          <a
            href="https://github.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.Image src={github} alt="Github - @ricopella" />
          </a>
          <a
            href="https://www.instagram.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.Image src={insta} alt="Instagram - @ricopella" />
          </a>
          <a
            href="https://twitter.com/ricopella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.Image src={twitter} alt="Twitter - @ricopella" />
          </a>
          <a
            href="https://www.linkedin.com/in/nsundara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.Image src={linkedin} alt="LinkedIn - Narin Sundarabhaya" />
          </a>
        </Styled.ContactRow>
      </Container>
    </Styled.ContactWrapper>
  </Page>
)

export default SkillsContainer
