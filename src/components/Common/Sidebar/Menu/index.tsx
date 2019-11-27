import * as React from 'react'
import styled from 'styled-components'
import Item from 'components/Common/Sidebar/Menu/Item'

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const itemsData = [
  {
    name: 'Dashboard',
    icon: '',
    link: '/'
  },
  {
    name: 'About',
    icon: '',
    link: '/about/'
  },
  {
    name: 'Users',
    icon: '',
    link: '/users/'
  }
]

interface IItemProps {
  name: string
  icon: string,
  link: string
}

const items = itemsData.map((item: IItemProps, idx: number) => (
  <Item key={idx} {...item} />
))

const Menu = () => {
  return <MenuWrapper>{items}</MenuWrapper>
}

export default Menu
