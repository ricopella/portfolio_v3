import React, { FC } from 'react'
import Styled from './Progress.styles'
import { ProgressBarProps } from '../../types'
import { AnimatePresence } from 'framer-motion'

const ProgressBar: FC<ProgressBarProps> = ({ title, percent }) => (
  <AnimatePresence initial={false}>
    <Styled.ProgressRowContainer>
      <Styled.ProgressTitle>{title}</Styled.ProgressTitle>
      <Styled.ProgressBarContainer>
        <Styled.ProgressBarFiller
          initial="empty"
          animate="filled"
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
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        />
      </Styled.ProgressBarContainer>
      <Styled.ProgressTitle>{percent}%</Styled.ProgressTitle>
    </Styled.ProgressRowContainer>
  </AnimatePresence>
)

export default ProgressBar
