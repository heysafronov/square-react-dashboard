import * as React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
`

const Task = props => {
  const onDragStart = e => {
    e.dataTransfer.setData('text/html', props.data.id)
  }

  return (
    <Div draggable='true' onDragStart={onDragStart}>
      <span>{props.data.name}</span>
    </Div>
  )
}

export default Task
