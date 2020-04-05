import React, { FC } from 'react'
import { ToggleTabsProps } from '../../types'
import Styled from './ToggleTabs.styles'
import useIsMobile from '../../hooks/useIsMobile'

const ToggleTabs: FC<ToggleTabsProps> = ({
  children,
  items = [],
  selectedItem,
  setSelectedItem,
}) => {
  const isMobile = useIsMobile()

  const setActiveClassName = (toggleItem: string) =>
    selectedItem === toggleItem ? `active` : ``

  const renderDesktopTabs = () => (
    <Styled.ToggleSection>
      <Styled.ToggleTabsContainer>
        {items.map(toggleItem => (
          <Styled.ToggleTabItem
            className={setActiveClassName(toggleItem)}
            key={`toggle_item_${toggleItem}`}
            onClick={() => setSelectedItem(toggleItem)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>{toggleItem}</span>
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
            className={setActiveClassName(toggleItem)}
            onClick={() => setSelectedItem(toggleItem)}
          >
            <span>{toggleItem}</span>
            <Styled.MobileAccordionArrow
              className={setActiveClassName(toggleItem)}
            />
          </Styled.MobileAccordionButton>
          <Styled.MobileAccordion
            key="content"
            initial="collapsed"
            animate={selectedItem === toggleItem ? `open` : `collapsed`}
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Styled.MobileAccordionContent>
              {children}
            </Styled.MobileAccordionContent>
          </Styled.MobileAccordion>
        </Styled.MobileAccordion>
      ))}
    </Styled.MobileAccordionContainer>
  )

  return <>{!isMobile ? renderDesktopTabs() : renderMobileAccordion()}</>
}

export default ToggleTabs
