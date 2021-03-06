import React, { FC } from 'react'
import Styled from './Resume.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { ResumeContactItem } from '../../types'

export const PureContact: FC<{
  contactItems: ResumeContactItem[]
  title: string
}> = ({ contactItems = [], title = '' }) => {
  const renderLocation = ({ value }: { value: string }) => (
    <Styled.ContactRowValue>{value}</Styled.ContactRowValue>
  )

  const renderExternalLink = ({ href, value }: ResumeContactItem) => (
    <Styled.ContactRowValueLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </Styled.ContactRowValueLink>
  )

  const renderInternalLink = ({ value }: { value: string }) => (
    <Styled.ContactRowValueInternalLink to={`/`}>
      {value}
    </Styled.ContactRowValueInternalLink>
  )

  return (
    <Styled.Contact>
      <Styled.ResumeBodyHeading>{title}</Styled.ResumeBodyHeading>
      <Styled.ContactBody>
        {(contactItems || []).map((item, idx) => (
          <Styled.ContactRowItem key={`resume_contact_${item}_${idx}`}>
            <Styled.ContactRowKey>{item.key}: </Styled.ContactRowKey>
            {item.key === 'Location'
              ? renderLocation(item)
              : item.href
              ? renderExternalLink(item)
              : renderInternalLink(item)}
          </Styled.ContactRowItem>
        ))}
      </Styled.ContactBody>
    </Styled.Contact>
  )
}

const Contact = () => {
  const { resume } = useSiteMetaData()
  return (
    <PureContact contactItems={resume.contact} title={Object.keys(resume)[0]} />
  )
}

export default Contact
