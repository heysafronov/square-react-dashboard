import React from 'react'
import styled from 'styled-components'
import Item from 'components/Common/Sidebar/Menu/Item'
import IconTasks from 'components/Common/Icons/Menu/Tasks'
import ErrorBoundary from 'components/Common/ErrorBoundary'
import IconMessages from 'components/Common/Icons/Menu/Messages'
import IconSchedule from 'components/Common/Icons/Menu/Schedule'
import IconActivity from 'components/Common/Icons/Menu/Activity'
import IconSettings from 'components/Common/Icons/Menu/Settings'
import IconDashboard from 'components/Common/Icons/Menu/Dashboard'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-top: 40px;
  }
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
    link: '/messages'
  },
  {
    name: 'Tasks',
    icon: IconTasks(),
    link: '/tasks'
  },
  {
    name: 'Schedule',
    icon: IconSchedule(),
    link: '/schedule'
  },
  {
    name: 'Activity',
    icon: IconActivity(),
    link: '/activity'
  },
  {
    name: 'Settings',
    icon: IconSettings(),
    link: '/settings'
  }
]

interface IItemProps {
  name: string
  icon: object | string
  link: string
}

const items = itemsData.map((item: IItemProps, idx: number): object => (
  <Item key={idx} {...item} />
))

const Menu = () => {
  return (
    <ErrorBoundary>
      <Wrapper>{items}</Wrapper>
    </ErrorBoundary>
  )
}

export default Menu
