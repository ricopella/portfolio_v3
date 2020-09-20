import GalleryItem from '../../components/GalleryItem'
import Page from '../../components/Page'
import React, { FC } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import SlideUp from '../../components/SlideUpElement'
import Styled from './Portfolio.styles'
import ToggleSwitch from '../../components/ToggleSwitch'
import ToggleTabs from '../../components/ToggleTabs'
import useGithubRepos from '../../hooks/useGithubRepos'
import useIsMobile from '../../hooks/useIsMobile'
import usePortfolioItems from '../../hooks/usePortfolioItems'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const HEADING = `Portfolio`

const Portfolio: FC<{}> = () => {
  const isMobile = useIsMobile()
  const { portfolioItems } = useSiteMetaData()
  const githubItems = useGithubRepos()

  const {
    selectedView,
    setSelectedView,
    views,
    selectedToggleItem,
    shownItem,
    setSelectedToggleItem,
  } = usePortfolioItems(portfolioItems, githubItems, isMobile)

  const handleSetSelectedToggleItem = (item: string) => {
    setSelectedToggleItem(selectedToggleItem === item && isMobile ? '' : item)
  }

  const calcPercents = () => {
    const cache: {
      [id: string]: { size: number; name: string; percent?: number }
    } = {}
    let totalCount = 0
    githubItems.forEach(repo => {
      repo.node.languages.edges.forEach(language => {
        if (language.node.name !== 'Objective-C') {
          const name = language.node.name
          const id = language.node.id
          const size = cache?.[id]?.size
            ? cache[id]?.size + language.size
            : language.size

          cache[id] = {
            size,
            name,
          }
          totalCount = totalCount + language.size
        }
      })
    })

    Object.keys(cache).forEach(id => {
      const percent = (cache[id].size / totalCount) * 100
      cache[id] = { ...cache[id], percent }
    })
  }
  calcPercents()

  return (
    <Page id="portfolio" title={HEADING}>
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
              <GalleryItem {...shownItem} filename={shownItem.fileName} />
            </SlideUp>
          ) : null}
        </ToggleTabs>
      </Styled.ExperienceContentWrapper>
    </Page>
  )
}

export default Portfolio
