import React, { FC } from 'react'
import SpotifyTop3Item from './SpotifyTopItem'
import Styled from './SpotifyTop3.styles'
import useSpotifyData from '../../hooks/useSpotifyData'

const SpotifyTop3: FC<{}> = () => {
  const recentTracks = useSpotifyData()
  return (
    <Styled.Top3Wrapper>
      {recentTracks.map((audio, idx) => (
        <SpotifyTop3Item
          key={audio.track.name + idx}
          playedAt={audio.played_at}
          track={audio.track}
        />
      ))}
    </Styled.Top3Wrapper>
  )
}

export default SpotifyTop3
