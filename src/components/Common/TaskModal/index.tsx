import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background-color: rgba(23, 23, 37, 0.4);
  z-index: 100;
`

interface ITaskModalProps extends ITaskState {
  onClose(): void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  const element = document.getElementById('modal')

  return ReactDOM.createPortal(
    <Wrapper>
      <button onClick={props.onClose}>Закрыть</button>
      {props.title}
    </Wrapper>,
    element
  )
}

export default TaskModal
