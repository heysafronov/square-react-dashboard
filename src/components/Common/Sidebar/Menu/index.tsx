import * as React from 'react'
import styled from 'styled-components'
import Item from 'components/Common/Sidebar/Menu/Item'
import IconDashboard from 'components/Common/Icons/IconDashboard'
import IconMessages from 'components/Common/Icons/IconMessages'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const itemsData = [
  {
    name: 'Dashboard',
    icon: IconDashboard(),
    link: '/'
  },
  {
    name: 'Messages',
    icon: IconMessages(),
    link: '/messages/'
  },
  {
    name: 'Users',
    icon: '',
    link: '/users/'
  }
]

interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const items = itemsData.map((item: IItemProps, idx: number) => (
  <Item key={idx} {...item} />
))

const Menu = () => {
  return <MenuWrapper>{items}</MenuWrapper>
}

export default Menu
