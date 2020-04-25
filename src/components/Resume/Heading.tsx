import ProfileImage from '../ProfileImage'
import React, { FC } from 'react'
import Styled from './Resume.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'

interface PureHeadingProps {
  name: string[]
  // for testing
  removeImage?: boolean
}

export const PureHeading: FC<PureHeadingProps> = ({
  name = [],
  removeImage = false,
}) => (
  <Styled.Heading>
    <Styled.HeadingProfileImageWrapper>
      {!removeImage ? (
        <ProfileImage
          innerStyle={Styled.HeadingProfileImageInner}
          outerStyle={Styled.HeadingProfileImageOuter}
        />
      ) : (
        <div />
      )}
    </Styled.HeadingProfileImageWrapper>
    <Styled.HeadingWrapper>
      <Styled.HeadingText className="first">{name[0]}</Styled.HeadingText>
      <Styled.HeadingText className="last">{name[1]}</Styled.HeadingText>
    </Styled.HeadingWrapper>
  </Styled.Heading>
)

const Heading = () => {
  const { author } = useSiteMetaData()
  return <PureHeading name={author.name.split(' ')} />
}

export default Heading
