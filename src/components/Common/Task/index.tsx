import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import { ITaskState } from 'store/tasks/types'
import TaskModal from 'components/Common/TaskModal'
import { ITeamListUserState } from 'store/teams/types'
import { getKanbanOption } from 'store/show/selectors'
import TasksIcon from 'components/Common/Icons/Menu/Tasks'
import AttachIcon from 'components/Common/Icons/Common/Attach'
import ActivityIcon from 'components/Common/Icons/Menu/Activity'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: ITaskProps) =>
    props.kanbanOption ? 'column' : 'row'};
  cursor: move;
  border-radius: 20px;
  padding: 15px;
  margin: 0 5px;
  background-color: white;
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
const Activity = styled(Status)`
  margin: 0;
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
const ScoreLine = styled.div`
  background-color: #e2e2ea;
  width: 100%;
  height: 2.5px;
  border-radius: 2.5px;
  div {
    height: 2.5px;
    background-color: #3dd598;
    width: ${(props: ITaskProps) => `${props.data.line}%`}
`
const ScoreLineTitle = styled(Team)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

  const users = props.data.users.map(
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
          <Activity>
            <ActivityIcon />
            {props.data.score}
          </Activity>
        </Info>
        <Score {...props}>
          <ScoreLineTitle>{props.data.line}%</ScoreLineTitle>
          <ScoreLine {...props}>
            <div />
          </ScoreLine>
        </Score>
        <Users>{users}</Users>
      </Wrapper>
      <>{modal && <TaskModal {...props.data} onClose={toggleModal} />}</>
    </>
  )
}
const mapStateToProps = (state: AppState) => ({
  kanbanOption: getKanbanOption(state)
})

export default connect(mapStateToProps)(Task)
