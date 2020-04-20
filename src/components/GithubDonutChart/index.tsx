import DonutChart from '../DonutChart'
import React, { FC } from 'react'
import Styled from './GithubDonutChart.styles'
import { GithubDonutItem } from '../../types'
import { PIE_SERIES_COLORS } from '../../styles/variables'

const GithubDonutChart: FC<{ githubData: GithubDonutItem[] | null }> = ({
  githubData = [],
}) => {
  return (
    <Styled.GithubContainer>
      <Styled.GithubHeading>
        Breakdown of this repositories languages <i>(from Github API)</i>
      </Styled.GithubHeading>
      <Styled.GithubWrapper>
        <DonutChart data={githubData} />
        <Styled.GithubKeyContainer
          style={{
            gridTemplateRows: `repeat(${
              (githubData || []).length
            }), max-content`,
          }}
        >
          {githubData?.map((edge, idx) => (
            <Styled.GithubKeyItem>
              <Styled.GithubKeyColor
                style={{ backgroundColor: PIE_SERIES_COLORS[idx] }}
              />
              <Styled.GithubKeyText>{edge?.name}</Styled.GithubKeyText>
              <Styled.GithubKeyText>{edge?.y}%</Styled.GithubKeyText>
            </Styled.GithubKeyItem>
          ))}
        </Styled.GithubKeyContainer>
      </Styled.GithubWrapper>
    </Styled.GithubContainer>
  )
}

export default GithubDonutChart
