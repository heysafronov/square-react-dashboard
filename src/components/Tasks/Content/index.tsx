import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TaskModule from 'components/Tasks/Content/TaskModule'
import {
  filtratedTasksBacklog,
  filtratedTasksTodo
} from 'store/tasks/selectors'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  width: 600px;
  height: 600px;
`

const Content = props => {
  return (
    <Wrapper>
      <TaskModule data={props.backlog} type='backlog' />
      <TaskModule data={props.todo} type='todo' />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  backlog: filtratedTasksBacklog(state),
  todo: filtratedTasksTodo(state)
})

export default connect(mapStateToProps)(Content)
