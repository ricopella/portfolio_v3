import React, { FC } from 'react'
import { ToggleSwitchProps } from '../../types'
import Styled from './ToggleSwitch.styles'

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
