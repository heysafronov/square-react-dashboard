import React from 'react'
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`
const Icon = styled.div`
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
    <Wrapper>
      <NavItem exact activeClassName={active} to={props.link}>
        <Icon>{props.icon}</Icon>
        <NameLink>{props.name}</NameLink>
      </NavItem>
    </Wrapper>
  )
}

export default Item
