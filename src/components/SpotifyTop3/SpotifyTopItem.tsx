import format from 'date-fns/format'
import React, { FC } from 'react'
import Styled from './SpotifyTop3.styles'
import { SpotifyTopItem } from '../../types'

const SpotifyTop3Item: FC<SpotifyTopItem> = ({
  track,
  playedAt = new Date(),
}) => {
  const renderMaskInfo = () => (
    <Styled.Type3MaskWrapper>
      <Styled.Hover>
        <Styled.Top3Link
          href={track.external_urls.spotify}
          rel="noopener noreferrer"
          target="_blank"
          title={track.external_urls.spotify}
        >
          {track.name}
        </Styled.Top3Link>
        <Styled.Top3Row>{track.artists?.[0]?.name}</Styled.Top3Row>
        <Styled.LastTop3Row>
          Played on: {format(new Date(playedAt), ` MMMM d`)}
        </Styled.LastTop3Row>
      </Styled.Hover>
    </Styled.Type3MaskWrapper>
  )
  return (
    <Styled.Top3Item>
      <Styled.Top3ImageWrapper>
        <Styled.Top3ItemImage
          fluid={[track.image.localFile.childImageSharp.fluid]}
        />
        {renderMaskInfo()}
      </Styled.Top3ImageWrapper>
      <Styled.Top3AudioPlayer src={track.preview_url} controls />
    </Styled.Top3Item>
  )
}

export default SpotifyTop3Item
