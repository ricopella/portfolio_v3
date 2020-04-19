import React, { FC, useContext } from 'react'
import Styled from './ThemeToggle.styles'
import ThemeContext from '../../providers/ThemeContext'
import {
  BUTTON_ANIMATION,
  MENU_OPEN_CLOSED_SLIDE_ANIMATION,
  Z_INDEX,
} from '../../styles/variables'

const ThemeToggle = () => {
  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext)
  return (
    <Styled.ThemeToggleWrapper
      variants={MENU_OPEN_CLOSED_SLIDE_ANIMATION}
      {...BUTTON_ANIMATION}
      onClick={() => (setIsThemeDark ? setIsThemeDark(curr => !curr) : null)}
    >
      <Styled.ThemeToggleInner
        initial="dark"
        animate={isThemeDark ? 'dark' : 'light'}
        exit="dark"
        variants={{
          dark: {
            left: 6,
            top: 6,
          },
          light: {
            left: 50,
            top: 6,
          },
        }}
      />
    </Styled.ThemeToggleWrapper>
  )
}

export default ThemeToggle
