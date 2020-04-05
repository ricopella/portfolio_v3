import React, { FC } from 'react'
import { ToggleTabsProps } from '../../types'
import Styled from './ToggleTabs.styles'

const ToggleTabs: FC<ToggleTabsProps> = ({
  items = [],
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <Styled.ToggleTabsContainer>
      {items.map(toggleItem => (
        <Styled.ToggleTabItem
          className={selectedItem === toggleItem ? `active` : ``}
          key={`toggle_item_${toggleItem}`}
          onClick={() => setSelectedItem(toggleItem)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>{toggleItem}</span>
        </Styled.ToggleTabItem>
      ))}
    </Styled.ToggleTabsContainer>
  )
}

export default ToggleTabs
