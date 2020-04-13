import React, { FC } from 'react'
import Styled from './ToggleSwitch.styles'
import { ToggleSwitchProps } from '../../types'

/**
 * Component with two buttons that toggle one or the other
 */
const ToggleSwitch: FC<ToggleSwitchProps<string>> = ({
  currentView,
  setView,
  views,
}) => (
  <Styled.ToggleSwitchContainer>
    {views.map((view, idx) => (
      <Styled.ToggleButton
        key={`toggle_switch_${view}`}
        onClick={() => setView(view)}
        className={`${currentView === view ? 'active' : ''} ${
          idx === 0 ? 'left' : 'right'
        }`}
      >
        {view}
      </Styled.ToggleButton>
    ))}
  </Styled.ToggleSwitchContainer>
)

export default ToggleSwitch
