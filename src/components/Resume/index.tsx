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
            <Styled.ContactRowKey>Location: </Styled.ContactRowKey>
            <Styled.ContactRowValue>Los Angeles, CA</Styled.ContactRowValue>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Email: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'mailto:narinsun2020@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              narinsun2020@gmail.com
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Github: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={'https://github.com/ricopella'}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ricopella
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>Portfolio: </Styled.ContactRowKey>
            <Styled.ContactRowValueInternalLink to={`/`}>
              narinsun.com
            </Styled.ContactRowValueInternalLink>
          </Styled.ContactRowItem>
          <Styled.ContactRowItem>
            <Styled.ContactRowKey>LinkedIn: </Styled.ContactRowKey>
            <Styled.ContactRowValueLink
              href={`https://www.linkedin.com/in/nsundara/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ricopella
            </Styled.ContactRowValueLink>
          </Styled.ContactRowItem>
        </Styled.ContactBody>
      </Styled.Contact>
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
              <Styled.Skills>
                <Styled.ResumeBodyHeading>Skills</Styled.ResumeBodyHeading>
              </Styled.Skills>
              <Styled.WorkExperience>Work Experience</Styled.WorkExperience>
              <Styled.Education>Education</Styled.Education>
            </Styled.ResumeBody>
          </Styled.ResumeWrapper>
        </SlideUpElement>
      </Styled.ResumeContainer>
    </>
  )
}

export default Resume
