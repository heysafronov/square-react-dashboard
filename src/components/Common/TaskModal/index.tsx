import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import Close from 'components/Common/Icons/Common/Close'
import Shape from 'components/Common/Icons/Common/Shape'

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
  height: 30vh;
  background-color: white;
  border-radius: 20px;
  padding: 20px 25px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #92929d;
  font-size: 14px;
  height: 50px;
  border-bottom: 1px solid #e2e2ea;
`
const Button = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    fill: #92929d;
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
const Description = styled.div`
  display: flex;
  svg {
    fill: #92929d;
  }
`
const ShapeWrapper = styled.div`
  width: 20px;
`
const HeaderD = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const TitleD = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
  margin: 0 0 10px 10px;
`
const TextD = styled.span`
  margin-left: 10px;
  color: #92929d;
  font-size: 14px;
`
const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: #fc5a5a;
  outline: none;
  cursor: pointer;
  color: white;
  height: 38px;
  border-radius: 20px;
  border: 1px solid #fc5a5a;
  :hover {
    color: #fc5a5a;
    background-color: white;
  }
`

interface ITaskModalProps extends ITaskState {
  onClose(): void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  const element = document.getElementById('modal')

  return ReactDOM.createPortal(
    <Wrapper>
      <Modal>
        <Header>
          <span>{props.type}</span>
          <Button onClick={props.onClose}>
            <Close />
          </Button>
        </Header>
        <Title>
          <span>{props.title}</span>
        </Title>
        <Description>
          <ShapeWrapper>
            <Shape />
          </ShapeWrapper>
          <HeaderD>
            <TitleD>Description</TitleD>
            <TextD>
              {props.title}. Next Friday should be done. Next Monday we should
              deliver the first iteration. Make sure, we have a good result to
              be delivered by the day.
            </TextD>
          </HeaderD>
        </Description>
        <Delete>Delete</Delete>
      </Modal>
    </Wrapper>,
    element
  )
}

export default TaskModal
