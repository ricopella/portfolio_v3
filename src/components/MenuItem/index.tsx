import React, { FC } from 'react'
import setHref from '../../utils/setHref'
import Styled from './MenuItem.styles'
import { MenuItemProps } from '../../types'

/**
 * Component used for Header and Navigation
 *
 * Since the animation requires
 *
 * @param {*} { isOpen, item }
 */
const MenuItem: FC<MenuItemProps> = ({ item }) => (
  <Styled.MenuItemLi
    variants={Styled.MENU_ITEM_VARIANTS}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Styled.HomepageLink to={setHref(item)}>{`+ ${item}`}</Styled.HomepageLink>
  </Styled.MenuItemLi>
)

export default MenuItem
