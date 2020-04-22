import React, { useEffect, useState } from 'react'
import {
  Portfolio,
  PortfolioItem,
  UsePortfolioItems,
  UseGithubRepoItem,
} from '../types'

const usePortfolioItems = (
  portfolioItems: Portfolio[],
  githubItems: UseGithubRepoItem[],
  isMobile = false
): UsePortfolioItems => {
  const views = portfolioItems.map(item => item.title)
  const [selectedView, setSelectedView] = useState<string>(views[0])
  const setShownSubItems = (): PortfolioItem[] => {
    return (
      portfolioItems.find(item => item?.title === selectedView)?.items || []
    )
  }

  const [shownItems, setShownItems] = useState<PortfolioItem[]>(
    setShownSubItems()
  )

  const [selectedToggleItem, setSelectedToggleItem] = useState(
    shownItems[0].title
  )

  useEffect(() => {
    const newSubItems = setShownSubItems()
    setSelectedToggleItem(!isMobile ? newSubItems[0].title : '')
    setShownItems(newSubItems)
  }, [selectedView])

  useEffect(() => {
    if (isMobile) {
      setSelectedToggleItem('')
    } else {
      if (selectedToggleItem === '') {
        setSelectedToggleItem(shownItems[0].title)
      }
    }
  }, [isMobile])

  const shownItem =
    shownItems.find(item => item.title === selectedToggleItem) || null

  const githubItem = githubItems.find(
    item => item?.node?.id === shownItem?.githubId
  )

  return {
    selectedToggleItem,
    selectedView,
    setSelectedToggleItem,
    setSelectedView,
    shownItem: { ...shownItem, github: githubItem?.node || null },
    views,
  }
}

export default usePortfolioItems
