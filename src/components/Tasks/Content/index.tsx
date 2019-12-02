import { filteredTasks } from 'store/tasks/selectors'
import { filteredWrappers } from 'store/show/selectors'
import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import TaskWrapper from 'components/Common/TaskWrapper'
import ContentTitle from 'components/Tasks/Content/ContentTitle'

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  //
  //grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

interface IContentProps {
  backlog: ITaskState[]
  progress: ITaskState[]
  showAll: boolean
  showBacklog: boolean
}

const types = {
  all: 'All tasks',
  backlog: 'Backlog',
  progress: 'In Progress'
}

const Content: React.FC<IContentProps> = props => {
  return (
    <Wrapper>
      <ContentTitle />
      <Tasks>
        {props.showBacklog || props.showAll ? (
          <TaskWrapper data={props.backlog} type='Backlog' />
        ) : null}
        <TaskWrapper data={props.progress} type='In Progress' />
      </Tasks>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => ({
  showAll: filteredWrappers(state, types.all),
  showBacklog: filteredWrappers(state, types.backlog),
  backlog: filteredTasks(state, types.backlog),
  progress: filteredTasks(state, types.progress)
})

export default connect(mapStateToProps)(Content)
