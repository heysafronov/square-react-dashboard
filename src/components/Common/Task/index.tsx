import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import Info from 'components/Common/Task/Info'
import { ITaskState } from 'store/tasks/types'
import Score from 'components/Common/Task/Score'
import Titles from 'components/Common/Task/Titles'
import TaskModal from 'components/Common/TaskModal'
import { ITeamListUserState } from 'store/teams/types'
import { getKanbanOption } from 'store/show/selectors'

const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props: ITaskProps) => !props.option && 'space-around'};
  flex-direction: ${(props: ITaskProps) => (props.option ? 'column' : 'row')};
  cursor: move;
  border-radius: 20px;
  padding: 15px;
  margin: 0 5px 10px 5px;
  background: ${props =>
    props.drag
      ? `repeating-linear-gradient(
    45deg,
    white,
    white 5px,
    #f1f1f5 5px,
    #f1f1f5 10px
  )`
      : 'white'};
  border: ${props => (props.drag ? '1px dashed #92929d' : '1px dashed white')};
  opacity: ${props => (props.drag ? '0.999' : '1')};
`
const Users = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin: 10px 0 0 0;
`

interface ITaskProps {
  data: ITaskState
  key: string
  option: boolean
  drag?: boolean
}

const Task: React.FC<ITaskProps> = props => {
  const { data } = props

  const [modal, setModal] = React.useState<boolean>(false)
  const [drag, setDrag] = React.useState<boolean>(false)

  const onDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    setDrag(prevState => !prevState)
    e.dataTransfer.setData('text/html', data.id)
  }

  const toggleModal = (): void => {
    setModal(prevState => !prevState)
  }

  const users = data.users.map(
    (user: ITeamListUserState, idx: number): object => (
      <Avatar key={idx} {...user} />
    )
  )

  return (
    <>
      <Wrapper
        {...props}
        draggable={true}
        onDragStart={onDragStart}
        onClick={toggleModal}
        drag={drag}
      >
        <Titles data={data} />
        <Info data={data} />
        <Score data={data} />
        <Users>{users}</Users>
      </Wrapper>
      <>{modal && <TaskModal {...data} onClose={toggleModal} />}</>
    </>
  )
}
const mapStateToProps = (state: AppState) => {
  return {
    option: getKanbanOption(state)
  }
}

export default connect(mapStateToProps)(Task)
