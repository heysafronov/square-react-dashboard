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

  &.${active} {
    color: #0062ff;
    border-left: 3px solid #0062ff;
    img {
      background-color: red;
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

interface IItemProps {
  name: string
  icon: string
  link: string
}

const Item: React.FC<IItemProps> = props => {
  return (
    <ItemWrapper>
      <NavItem exact activeClassName={active} to={props.link}>
        <IconWrapper>
          <img
            src={require('assets/images/icons/dashboard.svg')}
            alt='Icon menu'
          />
        </IconWrapper>
        <span>{props.name}</span>
      </NavItem>
    </ItemWrapper>
  )
}

export default Item
