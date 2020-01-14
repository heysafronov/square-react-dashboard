import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loader from 'components/Common/Loader'
import { IShowTypes } from 'store/show/types'
import { ITaskState } from 'store/tasks/types'
import { fetchTasks } from 'store/tasks/actions'
import TaskWrapper from 'components/Common/TaskWrapper'
import ContentTitle from 'components/Tasks/Content/Title'
import { filteredTasks, getTasks } from 'store/tasks/selectors'
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
    props.option ? `repeat(auto-fill, minmax(280px, 1fr))` : 'none'};
  grid-template-rows: ${(props: IContentProps) =>
    props.option ? 'none' : 'repeat(4, auto)'};
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
  option: boolean
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
  const { tasks, showState, backlog, progress, complete, fetchTasks } = props

  React.useEffect(() => {
    !tasks.length && fetchTasks()
  }, [])

  return (
    <Wrapper>
      <ContentTitle />
      {tasks.length ? (
        <Tasks {...props}>
          {showState.backlog && <TaskWrapper data={backlog} type='Backlog' />}
          {showState.progress && (
            <TaskWrapper data={progress} type='In Progress' />
          )}
          {showState.complete && (
            <TaskWrapper data={complete} type='Complete' />
          )}
          <TaskWrapper data={[]} type='New' />
        </Tasks>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    tasks: getTasks(state),
    option: getKanbanOption(state),
    showState: getShowState(state),
    backlog: filteredTasks(state, types.backlog),
    progress: filteredTasks(state, types.progress),
    complete: filteredTasks(state, types.complete)
  }
}

const mapDispatchToProps = {
  fetchTasks
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
