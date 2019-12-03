import * as React from 'react'
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
  onClose: () => void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  return (
    <Wrapper>
      <button onClick={props.onClose}>Закрыть</button>
      {props.name}
    </Wrapper>
  )
}

export default TaskModal
