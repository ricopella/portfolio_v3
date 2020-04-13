import MenuItem from '../MenuItem'
import React, { FC } from 'react'
import Styled from './Navigation.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'

const Navigation: FC<{}> = () => {
  const { headerItems } = useSiteMetaData()

  return (
    <Styled.MenuItemUl variants={Styled.NAV_VARIANTS}>
      {headerItems.map(item => (
        <MenuItem key={`menu_item_${headerItems}`} item={item} />
      ))}
    </Styled.MenuItemUl>
  )
}

export default Navigation
