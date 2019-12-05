import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { switchKanban } from 'store/show/actions'
import KanbanIcon from 'components/Common/Icons/Switcher/Kanban'
import DefaultIcon from 'components/Common/Icons/Switcher/Default'
import GanttIcon from 'components/Common/Icons/Switcher/Gantt'

const Wrapper = styled.div`
  display: flex;
`
const Icon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  svg {
    fill: #b5b5be;
  }
`
const Kanban = styled(Icon)`
  border-radius: 10px 0 0 10px;
`
const Default = styled(Icon)`
  border-right: 1px solid #f1f1f5;
  border-left: 1px solid #f1f1f5;
`
const Gantt = styled(Icon)`
  border-radius: 0 10px 10px 0;
`

interface IContentTitleSwitcherProps {
  switchKanban: typeof switchKanban
}

const ContentTitleSwitcher: React.FC<IContentTitleSwitcherProps> = props => {
  const handleSwitcher = (option: boolean): void => {
    props.switchKanban(option)
  }

  return (
    <Wrapper>
      <Kanban onClick={() => handleSwitcher(true)}>
        <KanbanIcon />
      </Kanban>
      <Default onClick={() => handleSwitcher(false)}>
        <DefaultIcon />
      </Default>
      <Gantt>
        <GanttIcon />
      </Gantt>
    </Wrapper>
  )
}

export default connect(
  null,
  { switchKanban }
)(ContentTitleSwitcher)
