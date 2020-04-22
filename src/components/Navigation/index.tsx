import MenuItem from '../MenuItem'
import React, { FC } from 'react'
import Styled from './Navigation.styles'
import useSiteMetaData from '../../hooks/useSiteMetaData'

export const PureNavigation: FC<{ headerItems: string[] }> = ({
  headerItems = [],
}) => (
  <Styled.MenuItemUl variants={Styled.NAV_VARIANTS}>
    {headerItems.map(item => (
      <MenuItem key={`menu_item_${item}`} item={item} />
    ))}
  </Styled.MenuItemUl>
)

const Navigation: FC<{}> = () => {
  const { headerItems = [] } = useSiteMetaData()

  return <PureNavigation headerItems={headerItems} />
}

export default Navigation
