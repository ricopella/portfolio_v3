import React, { useEffect, useState } from 'react'
import setCurrentSkills from '../utils/setCurrentSkills'
import { Skills, SubSkills } from '../types'

const useCategoryItems = (
  items: Skills[]
): [SubSkills[], string, (category: string) => void] => {
  const [selectedItems, setSelectedItems] = useState<string>(items?.[0]?.title)
  const [subItems, setSubItems] = useState(
    setCurrentSkills(items, selectedItems)
  )

  // When the Items changes, update the sub-Items
  useEffect(() => {
    setSubItems(setCurrentSkills(items, selectedItems))
  }, [selectedItems])

  return [subItems, selectedItems, setSelectedItems]
}

export default useCategoryItems
