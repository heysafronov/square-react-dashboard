import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { IShowTypes } from 'store/show/types'
import { ITaskState } from 'store/tasks/types'
import { filteredTasks } from 'store/tasks/selectors'
import TaskWrapper from 'components/Common/TaskWrapper'
import ContentTitle from 'components/Tasks/Content/ContentTitle'
import { getShowState, getKanbanOption } from 'store/show/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`
const Tasks = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: ${(props: IContentProps) =>
    props.kanbanOption ? `repeat(auto-fill, minmax(280px, 1fr))` : 'none'};
  grid-template-rows: ${(props: IContentProps) =>
    props.kanbanOption ? 'none' : 'repeat(4, auto)'};
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

interface IContentProps {
  backlog: ITaskState[]
  progress: ITaskState[]
  complete: ITaskState[]
  showAll: boolean
  showBacklog: boolean
  showState: IShowTypes
  kanbanOption: boolean
}

const types = {
  all: 'All tasks',
  backlog: 'Backlog',
  progress: 'In Progress',
  complete: 'Complete'
}

const Content: React.FC<IContentProps> = props => {
  return (
    <Wrapper>
      <ContentTitle />
      <Tasks {...props}>
        {props.showState.backlog ? (
          <TaskWrapper data={props.backlog} type='Backlog' />
        ) : null}
        {props.showState.progress ? (
          <TaskWrapper data={props.progress} type='In Progress' />
        ) : null}
        {props.showState.complete ? (
          <TaskWrapper data={props.complete} type='Complete' />
        ) : null}
        <TaskWrapper data={[]} type='New' />
      </Tasks>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => ({
  kanbanOption: getKanbanOption(state),
  showState: getShowState(state),
  backlog: filteredTasks(state, types.backlog),
  progress: filteredTasks(state, types.progress),
  complete: filteredTasks(state, types.complete)
})

export default connect(mapStateToProps)(Content)
