import React, { useEffect, useState } from 'react'
import { Portfolio, PortfolioItem, UsePortfolioItems } from '../types'

const usePortfolioItems = (
  portfolioItems: Portfolio[],
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

  return {
    selectedToggleItem,
    selectedView,
    setSelectedToggleItem,
    setSelectedView,
    shownItem,
    views,
  }
}

export default usePortfolioItems
