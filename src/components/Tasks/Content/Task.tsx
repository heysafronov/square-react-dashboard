import * as React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
`

const Task = props => {
  const forDragStart = ev => {
    onDragStart(ev, props.data.id)
  }

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData('text/html', id)
  }

  return (
    <Div draggable='true' onDragStart={forDragStart}>
      <span>{props.data.name}</span>
    </Div>
  )
}

export default Task
