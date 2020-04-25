import React, { FC } from 'react'
import setHref from '../../utils/setHref'
import Styled from './MenuItem.styles'
import { BUTTON_ANIMATION } from '../../styles/variables'
import { MenuItemProps } from '../../types'

/**
 * Component used for Header and Navigation
 *
 * Since the animation requires
 *
 * @param {*} { isOpen, item }
 */
const MenuItem: FC<MenuItemProps> = ({ item }) => (
  <Styled.MenuItemLi variants={Styled.MENU_ITEM_VARIANTS} {...BUTTON_ANIMATION}>
    {item === 'resume' ? (
      <Styled.ResumeLink to="/resume">+ {item}</Styled.ResumeLink>
    ) : (
      <Styled.HomepageLink
        to={setHref(item)}
      >{`+ ${item}`}</Styled.HomepageLink>
    )}
  </Styled.MenuItemLi>
)

export default MenuItem
