import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
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

interface ITaskWrapperProps {
  dragAndDrop: typeof dragAndDrop
  data: ITaskState[]
  type: string
}

const TaskWrapper: React.FC<ITaskWrapperProps> = props => {
  const tasks = () => {
    return props.data.map(item => <Task data={item} key={item.id} />)
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDrop = (e: any) => {
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
)(TaskWrapper)
