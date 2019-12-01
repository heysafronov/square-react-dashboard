import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { dragAndDrop } from 'store/tasks/actions'
import IconOval from 'components/Common/Icons/Common/Oval'

const Wrapper = styled.div`
  width: 250px;
`
const Header = styled.div`
  border-radius: 15px 15px 0 0;
  border-top: 1px solid #e2e2ea;
  border-left: 1px solid #e2e2ea;
  border-right: 1px solid #e2e2ea;
  display: flex;
  justify-content: space-between;
`
const Title = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`
const More = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  @media (max-width: 450px) {
    display: none;
  }
`
const TasksWrapper = styled.div`
  height: auto;
  border-left: 1px solid #e2e2ea;
  border-right: 1px solid #e2e2ea;
`
const Button = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 0 0 15px 15px;
  outline: none;
  border: 1px solid #e2e2ea;
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
    <Wrapper onDragOver={onDragOver} onDrop={onDrop}>
      <Header>
        <Title>{props.type}</Title>
        <More>
          <IconOval />
        </More>
      </Header>
      <TasksWrapper>{tasks()}</TasksWrapper>
      <Button />
    </Wrapper>
  )
}

export default connect(
  null,
  { dragAndDrop }
)(TaskWrapper)
