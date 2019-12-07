import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import TaskModal from 'components/Common/TaskModal'
import { getKanbanOption } from 'store/show/selectors'
import TasksIcon from 'components/Common/Icons/Menu/Tasks'
import AttachIcon from 'components/Common/Icons/Common/Attach'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: ITaskProps) =>
    props.kanbanOption ? 'column' : 'row'};
  cursor: move;
  border-radius: 20px;
  padding: 15px;
  margin: 0 5px;
  background-color: white;
  border: 1px solid red;
`
const TextStyles = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #92929d;
`
const Titles = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled(TextStyles)`
  color: #171725;
  margin-bottom: 7px;
`
const Team = styled(TextStyles)`
  color: #696974;
`
const Attach = styled(TextStyles)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`
const Status = styled(TextStyles)`
  margin: 0 15px 0 20px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    fill: #92929d;
    width: 14px;
    height: 14px;
  }
`
const Info = styled.div`
  display: flex;
  margin: 15px 0 10px 0;
`
const Score = styled.div`
  display: flex;
  flex-direction: ${(props: ITaskProps) =>
    props.kanbanOption ? 'column' : 'row'};
`
const Avatars = styled.div`
  display: flex;
`

interface ITaskProps {
  data: ITaskState
  key: string
  kanbanOption: boolean
}

const Task: React.FC<ITaskProps> = props => {
  const [modal, setModal] = React.useState<boolean>(false)

  const onDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    e.dataTransfer.setData('text/html', props.data.id)
  }

  const toggleModal = (): void => {
    setModal(prevState => !prevState)
  }

  return (
    <>
      <Wrapper
        {...props}
        draggable={true}
        onDragStart={onDragStart}
        onClick={toggleModal}
      >
        <Titles>
          <Title>{props.data.title}</Title>
          <Team>{props.data.team}</Team>
        </Titles>
        <Info>
          <Attach>
            <AttachIcon />
            {props.data.attach}
          </Attach>
          <Status>
            <TasksIcon />
            {props.data.status}
          </Status>
          <div>{props.data.score}</div>
        </Info>
        <Score {...props}>
          <div>{props.data.line}%</div>
          <div>---------</div>
        </Score>
        <Avatars>
          <div>ava 1</div>
          <div>ava 2</div>
          <div>ava 3</div>
        </Avatars>
      </Wrapper>
      <>{modal && <TaskModal {...props.data} onClose={toggleModal} />}</>
    </>
  )
}
const mapStateToProps = (state: AppState) => ({
  kanbanOption: getKanbanOption(state)
})

export default connect(mapStateToProps)(Task)
