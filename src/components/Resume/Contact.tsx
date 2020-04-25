import React, { FC } from 'react'
import Styled from './Resume.styles'

const Contact: FC<{}> = () => (
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

export default Contact
