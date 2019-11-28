import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const active = 'nav-item-active'
const NavItem = styled(NavLink).attrs({
  active
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #171725;
  font-size: 14px;
  letter-spacing: 0.1px;
  border-left: 3px solid #fff;
  svg {
    fill: #92929d;
  }

  &.${active} {
    color: #0062ff;
    border-left: 3px solid #0062ff;
    svg {
      fill: #0062ff;
    }
  }
`
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`
const IconWrapper = styled.div`
  margin: 0 24px;
`
const NameLink = styled.span`
  @media (max-width: 620px) {
    display: none;
  }
`

interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const Item: React.FC<IItemProps> = props => {
  return (
    <ItemWrapper>
      <NavItem exact activeClassName={active} to={props.link}>
        <IconWrapper>{props.icon}</IconWrapper>
        <NameLink>{props.name}</NameLink>
      </NavItem>
    </ItemWrapper>
  )
}

export default Item
