import * as React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
`

interface ITaskProps {
  data: object
  key: string
}

const Task: React.FC<ITaskProps> = props => {
  const onDragStart = (e: any) => {
    e.dataTransfer.setData('text/html', props.data.id)
  }

  return (
    <Div draggable='true' onDragStart={onDragStart}>
      <span>{props.data.name}</span>
    </Div>
  )
}

export default Task
