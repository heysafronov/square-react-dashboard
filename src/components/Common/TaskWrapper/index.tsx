import * as React from 'react'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { connect } from 'react-redux'
import { dragAndDrop } from 'store/tasks/actions'

const Div = styled.div`
  width: 250px;
  height: 600px;
  border: 1px solid red;
  div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
  }
`

const TaskModule = props => {
  const tasks = () => {
    return props.data.map(item => <Task data={item} key={item.id} />)
  }

  const onDragOver = e => {
    e.preventDefault()
  }

  const onDrop = e => {
    props.dragAndDrop(e, props.type)
  }

  return (
    <Div onDragOver={onDragOver} onDrop={onDrop}>
      <div>{tasks()}</div>
    </Div>
  )
}

export default connect(
  null,
  { dragAndDrop }
)(TaskModule)
