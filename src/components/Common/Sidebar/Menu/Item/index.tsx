import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #171725;
  font-size: 14px;
  letter-spacing: 0.1px;
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
      <StyledLink
        exact
        to={props.link}
        activeStyle={{
          color: '#0062ff',
          borderLeft: '3px solid #0062ff'
        }}
      >
        <IconWrapper>
          <img
            src={require('assets/images/icons/dashboard.svg')}
            alt='Icon menu'
          />
        </IconWrapper>
        <span>{props.name}</span>
      </StyledLink>
    </ItemWrapper>
  )
}

export default Item
