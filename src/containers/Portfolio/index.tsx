import GalleryItem from '../../components/GalleryItem'
import Page from '../../components/Page'
import PageHeading from '../../components/PageHeading'
import React, { FC } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import SlideUp from '../../components/SlideUpElement'
import Styled from './Portfolio.styles'
import ToggleSwitch from '../../components/ToggleSwitch'
import ToggleTabs from '../../components/ToggleTabs'
import useIsMobile from '../../hooks/useIsMobile'
import usePortfolioItems from '../../hooks/usePortfolioItems'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const HEADING = `Portfolio`

const Portfolio: FC<{}> = () => {
  const isMobile = useIsMobile()
  const { portfolioItems } = useSiteMetaData()
  const {
    selectedView,
    setSelectedView,
    views,
    selectedToggleItem,
    shownItem,
    setSelectedToggleItem,
  } = usePortfolioItems(portfolioItems, isMobile)

  const handleSetSelectedToggleItem = (item: string) => {
    setSelectedToggleItem(selectedToggleItem === item && isMobile ? '' : item)
  }

  return (
    <ScrollReveal>
      <Page id="portfolio" css={Styled.ExperiencePage}>
        <PageHeading title={HEADING} />
        <Styled.ExperienceContentWrapper>
          <ToggleSwitch
            currentView={selectedView}
            setView={setSelectedView}
            views={views}
          />
          <ToggleTabs
            items={
              portfolioItems
                .find(item => item?.title === selectedView)
                ?.items.map(item => item.title) || []
            }
            selectedItem={selectedToggleItem}
            setSelectedItem={handleSetSelectedToggleItem}
          >
            {shownItem?.title ? (
              <SlideUp key={shownItem.title}>
                <GalleryItem
                  alt={shownItem.alt}
                  description={shownItem.description}
                  filename={shownItem.fileName}
                  href={shownItem.href}
                  span={shownItem.span}
                  title={shownItem.title}
                />
              </SlideUp>
            ) : null}
          </ToggleTabs>
        </Styled.ExperienceContentWrapper>
      </Page>
    </ScrollReveal>
  )
}

export default Portfolio
