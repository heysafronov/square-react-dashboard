import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Task from 'components/Common/Task'
import { ITaskState } from 'store/tasks/types'
import { dragAndDrop } from 'store/tasks/actions'
import { getKanbanOption } from 'store/show/selectors'
import IconOval from 'components/Common/Icons/Common/Oval'

const variables = {
  color: '#0062ff',
  colorBorder: '#e2e2ea',
  crossSize: 16
}

const Wrapper = styled.div`
  width: ${(props: ITaskWrapperProps) => (props.option ? '280px' : 'auto')};
`
const Header = styled.div`
  border-radius: 15px 15px 0 0;
  border-top: 1px solid ${variables.colorBorder};
  border-left: 1px solid ${variables.colorBorder};
  border-right: 1px solid ${variables.colorBorder};
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
const TasksWrapper = styled<DragWrapperProps>('div')`
  height: auto;
  border-left: 1px solid ${variables.colorBorder};
  border-right: 1px solid ${variables.colorBorder};
  padding: 20px 0;
  background: ${(props: DragWrapperProps) =>
    props.dragOver
      ? `repeating-linear-gradient(
    45deg,
    white,
    white 5px,
    #E3ECFB 5px,
    #E3ECFB 10px
  )`
      : 'none'};
`
const Cross = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 0;
    content: '';
    height: ${variables.crossSize}px;
    width: 2px;
    background-color: #92929d;
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`
const Button = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 0 0 15px 15px;
  outline: none;
  border: 1px solid ${variables.colorBorder};
  position: relative;
  cursor: not-allowed;
  background-color: white;
  :hover {
    border: 1px dashed ${variables.color};
  }
  :hover ${Cross}:before {
    background-color: ${variables.color};
  }
  :hover ${Cross}:after {
    background-color: ${variables.color};
  }
`

type DragWrapperProps = {
  dragOver: () => void
}

interface ITaskWrapperProps {
  dragAndDrop: typeof dragAndDrop
  data: ITaskState[]
  type: string
  option: boolean
}

const Tasks = (props: ITaskWrapperProps): any => {
  return props.data.map((item: ITaskState) => (
    <Task data={item} key={item.id} />
  ))
}

const TaskWrapper: React.FC<ITaskWrapperProps> = props => {
  const { type, dragAndDrop } = props

  const [dragOver, setDragOver] = React.useState<boolean>(false)

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
  }

  const onDragEnter = (): void => {
    setDragOver(prevState => !prevState)
  }

  const onDragLeave = (): void => {
    setDragOver(prevState => !prevState)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    dragAndDrop(e, type)
    setDragOver(false)
  }

  return (
    <Wrapper
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      {...props}
    >
      <Header>
        <Title>{type}</Title>
        <More>
          <IconOval />
        </More>
      </Header>
      <TasksWrapper dragOver={dragOver}>
        <Tasks {...props} />
      </TasksWrapper>
      <Button>
        <Cross />
      </Button>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    option: getKanbanOption(state)
  }
}

const mapDispatchToProps = {
  dragAndDrop
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskWrapper)
