import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import React from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import Styled from './Contact.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const HEADING = `Contact`

const SkillsContainer = () => {
  const { contactItems } = useSiteMetaData()

  const renderContactItems = () => (
    <Styled.ContactRow>
      {contactItems.map((item, idx) => (
        <Styled.ContactLink
          key={`contact_items_${item.title}_${idx}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`+ ${item.title}`}
        </Styled.ContactLink>
      ))}
    </Styled.ContactRow>
  )

  return (
    <ScrollReveal>
      <Page id="contact" css={Styled.PageHeading}>
        <Styled.ContactWrapper>
          <PageHeading title={HEADING} />
          <Styled.ContactDescription>
            Whether you're a company looking to add to your team, a business
            owner looking build an app or web site with a freelance web
            developer, or a developer looking to collaborate on a project, or
            just wanting to say hi and see a picture of my dog, shoot me an{' '}
            <Styled.ContactLink href="mailto:nrs710@gmail.com" target="__top">
              email
            </Styled.ContactLink>{' '}
            and let's build something great together!
          </Styled.ContactDescription>
          {renderContactItems()}
        </Styled.ContactWrapper>
      </Page>
    </ScrollReveal>
  )
}

export default SkillsContainer
