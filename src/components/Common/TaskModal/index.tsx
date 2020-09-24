import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import { deleteTask } from 'store/tasks/actions'
import Close from 'components/Common/Icons/Common/Close'
import Description from 'components/Common/TaskModal/Description'

const variables = {
  colorGray: '#92929d',
  colorRed: '#fc5a5a',
  colorWhite: '#ffffff'
}

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 23, 37, 0.4);
  z-index: 100;
`
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 30%;
  min-height: 30vh;
  background-color: ${variables.colorWhite};
  border-radius: 20px;
  padding: 20px 25px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${variables.colorGray};
  font-size: 14px;
  height: 50px;
  border-bottom: 1px solid #e2e2ea;
`
const Button = styled.button`
  background-color: ${variables.colorWhite};
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    fill: ${variables.colorGray};
    :hover {
      fill: #0062ff;
    }
  }
`
const Title = styled.div`
  color: #171725;
  font-size: 24px;
  margin: 30px 0;
`
const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: ${variables.colorRed};
  outline: none;
  cursor: pointer;
  color: ${variables.colorWhite};
  height: 38px;
  border-radius: 20px;
  border: 1px solid ${variables.colorRed};
  :hover {
    color: ${variables.colorRed};
    background-color: ${variables.colorWhite};
  }
`

interface ITaskModalProps extends ITaskState {
  deleteTask: typeof deleteTask
  onClose(): void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  const { type, title, onClose, id, deleteTask } = props

  const element = document.getElementById('modal')
  if (!element) {
    throw new Error('The element #portal wasn`t found')
  }

  const removeTask = (id: string) => {
    deleteTask(id)
  }

  return ReactDOM.createPortal(
    <Wrapper>
      <Modal>
        <Header>
          <span>{type}</span>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </Header>
        <Title>
          <span>{title}</span>
        </Title>
        <Description title={title} />
        <Delete onClick={() => removeTask(id)}>Delete</Delete>
      </Modal>
    </Wrapper>,
    element
  )
}

const mapDispatchToProps = {
  deleteTask
}

export default connect(
  null,
  mapDispatchToProps
)(TaskModal)
