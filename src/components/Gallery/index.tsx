import React, { FC } from 'react'
import Styled from './Gallery.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import GalleryItem from './GalleryItem'

const GalleryMain: FC<{}> = () => {
  const { portfolioItems } = useSiteMetaData()

  return (
    <Styled.LayoutContainer>
      {portfolioItems.map(item => (
        <GalleryItem
          alt={item.alt}
          description={item.description}
          filename={item.fileName}
          href={item.href}
          key={item.title}
          span={item.span}
          title={item.title}
        />
      ))}
    </Styled.LayoutContainer>
  )
}

export default GalleryMain
