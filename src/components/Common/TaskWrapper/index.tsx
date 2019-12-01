import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { dragAndDrop } from 'store/tasks/actions'
import IconOval from 'components/Common/Icons/Common/Oval'

const Wrapper = styled.div`
  width: 250px;
  height: 600px;
  border: 1px solid #e2e2ea;
  border-radius: 15px;
`
const Header = styled.div`
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
      <div>{tasks()}</div>
    </Wrapper>
  )
}

export default connect(
  null,
  { dragAndDrop }
)(TaskWrapper)
