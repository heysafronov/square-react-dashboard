import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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

interface ITaskModalProps {
  id: string
  name: string
  type: string
  onClose(): void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  const element = document.getElementById('modal')

  return ReactDOM.createPortal(
    <Wrapper>
      <button onClick={props.onClose}>Закрыть</button>
      {props.name}
    </Wrapper>,
    element
  )
}

export default TaskModal
