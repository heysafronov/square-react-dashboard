import {
  filtratedTasksBacklog,
  filtratedTasksTodo
} from 'store/tasks/selectors'
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
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

interface IContentProps {
  backlog: ITaskState[]
  todo: ITaskState[]
}

const Content: React.FC<IContentProps> = props => {
  return (
    <Wrapper>
      <ContentTitle />
      <Tasks>
        <TaskWrapper data={props.backlog} type='Backlog' />
        <TaskWrapper data={props.todo} type='Todo' />
      </Tasks>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => ({
  backlog: filtratedTasksBacklog(state),
  todo: filtratedTasksTodo(state)
})

export default connect(mapStateToProps)(Content)
