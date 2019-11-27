import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconDashboard from 'components/Common/Icons/IconDashboard'

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  padding: 30px;
  border-left: 3px solid #0062ff;
  svg {
  color: red;
  }
`

interface IItemProps {
  name: string
  icon: string
  link: string
}

const Item: React.FC<IItemProps> = props => {
  return (
    <ItemWrapper>
      <IconWrapper>
        <IconDashboard />
      </IconWrapper>
      <Link to={props.link}>{props.name}</Link>
    </ItemWrapper>
  )
}

export default Item
