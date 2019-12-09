import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import { IShowTypes } from 'store/show/types'
import { ITaskState } from 'store/tasks/types'
import { fetchTasks } from 'store/tasks/actions'
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
  fetchTasks: typeof fetchTasks
  tasks: ITaskState[]
}

const types = {
  all: 'All tasks',
  backlog: 'Backlog',
  progress: 'In Progress',
  complete: 'Complete'
}

const Content: React.FC<IContentProps> = props => {
  React.useEffect(() => {
    props.fetchTasks()
  }, [])

  return (
    <Wrapper>
      <ContentTitle />
      {props.tasks.length ? (
        <Tasks {...props}>
          {props.showState.backlog && (
            <TaskWrapper data={props.backlog} type='Backlog' />
          )}
          {props.showState.progress && (
            <TaskWrapper data={props.progress} type='In Progress' />
          )}
          {props.showState.complete && (
            <TaskWrapper data={props.complete} type='Complete' />
          )}
          <TaskWrapper data={[]} type='New' />
        </Tasks>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => ({
  tasks: state.tasks,
  kanbanOption: getKanbanOption(state),
  showState: getShowState(state),
  backlog: filteredTasks(state, types.backlog),
  progress: filteredTasks(state, types.progress),
  complete: filteredTasks(state, types.complete)
})

const mapDispatchToProps = {
  fetchTasks
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
