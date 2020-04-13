import React, { FC, useEffect, useState } from 'react'
import Styled from './Progress.styles'
import { ProgressBarProps } from '../../types'
import { AnimatePresence } from 'framer-motion'

const ProgressBar: FC<ProgressBarProps> = ({ title, percent }) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false)

  useEffect(() => {
    setIsAnimated(true)
    return () => {
      setIsAnimated(false)
    }
  }, [])

  return (
    <AnimatePresence initial={false}>
      <Styled.ProgressRowContainer>
        <Styled.ProgressTitle>{title}</Styled.ProgressTitle>
        <Styled.ProgressBarContainer>
          <Styled.ProgressBarFiller
            initial="empty"
            animate={isAnimated ? 'filled' : 'empty'}
            exit="empty"
            variants={{
              empty: {
                opacity: 0,
                width: 0,
              },
              filled: {
                opacity: 1,
                width: `${percent}%`,
              },
            }}
          />
        </Styled.ProgressBarContainer>
        <Styled.ProgressPercent>{percent}%</Styled.ProgressPercent>
      </Styled.ProgressRowContainer>
    </AnimatePresence>
  )
}

export default ProgressBar
