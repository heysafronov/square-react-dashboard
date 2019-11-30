import * as React from 'react'
import styled from 'styled-components'
import Task from './Task'
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

  const forDragOver = ev => {
    onDragOver(ev)
  }

  const onDragOver = ev => {
    ev.preventDefault()
  }

  const forDrop = ev => {
    onDrop(ev, props.type)
  }

  const onDrop = (ev, type) => {
    props.dragAndDrop(ev, type)
  }

  const onDragEnter = () => {
    return true
  };
  //
  // onDragLeave = () => {
  //   this.setState(prevState => {
  //     return { dropping: !prevState.dropping };
  //   });
  // };

  return (
    <Div onDragOver={forDragOver} onDrop={forDrop} onDragEnter={onDragEnter}>
      <div>{tasks()}</div>
    </Div>
  )
}

export default connect(
  null,
  { dragAndDrop }
)(TaskModule)
