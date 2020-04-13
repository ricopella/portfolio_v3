import React, { FC } from 'react'
import setActiveClassName from '../../utils/setActiveClassName'
import Styled from './ToggleTabs.styles'
import { SLIDE_DOWN_ANIMATION_OPTIONS } from '../../styles/variables'
import { ToggleTabsProps } from '../../types'

const ToggleTabs: FC<ToggleTabsProps> = ({
  children,
  items = [],
  selectedItem,
  setSelectedItem,
}) => {
  const renderDesktopTabs = () => (
    <Styled.ToggleSection>
      <Styled.ToggleTabsContainer>
        {items.map(toggleItem => (
          <Styled.ToggleTabItem
            className={setActiveClassName(selectedItem, toggleItem)}
            key={`toggle_item_${toggleItem}`}
            onClick={() => setSelectedItem(toggleItem)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>{`+ ${toggleItem}`}</span>
          </Styled.ToggleTabItem>
        ))}
      </Styled.ToggleTabsContainer>
      {children}
    </Styled.ToggleSection>
  )

  const renderMobileAccordion = () => (
    <Styled.MobileAccordionContainer>
      {items.map(toggleItem => (
        <Styled.MobileAccordion key={`accordion_${toggleItem}`}>
          <Styled.MobileAccordionButton
            className={setActiveClassName(selectedItem, toggleItem)}
            onClick={() => setSelectedItem(toggleItem)}
          >
            <span>{`+ ${toggleItem}`}</span>
            <Styled.MobileAccordionArrow
              className={setActiveClassName(selectedItem, toggleItem)}
            />
          </Styled.MobileAccordionButton>
          <Styled.MobileAccordion
            animate={selectedItem === toggleItem ? `open` : `collapsed`}
            {...SLIDE_DOWN_ANIMATION_OPTIONS}
          >
            <Styled.MobileAccordionContent>
              {children}
            </Styled.MobileAccordionContent>
          </Styled.MobileAccordion>
        </Styled.MobileAccordion>
      ))}
    </Styled.MobileAccordionContainer>
  )

  return (
    <>
      {renderDesktopTabs()}
      {renderMobileAccordion()}
    </>
  )
}

export default ToggleTabs
