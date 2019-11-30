import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TaskWrapper from 'components/Common/TaskWrapper'
import ContentTitle from 'components/Tasks/Content/ContentTitle'
import {
  filtratedTasksBacklog,
  filtratedTasksTodo
} from 'store/tasks/selectors'

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
  margin: 35px 0 20px 0;
  display: flex;
`

const Content = props => {
  return (
    <Wrapper>
      <ContentTitle />
      <Tasks>
        <TaskWrapper data={props.backlog} type='backlog' />
        <TaskWrapper data={props.todo} type='todo' />
      </Tasks>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  backlog: filtratedTasksBacklog(state),
  todo: filtratedTasksTodo(state)
})

export default connect(mapStateToProps)(Content)
