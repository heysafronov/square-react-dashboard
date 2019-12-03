import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import TaskModal from 'components/Common/TaskModal'
import { getKanbanOption } from 'store/show/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: ITaskProps) =>
    props.kanbanOption ? 'column' : 'row'};
  padding-bottom: 20px;
  cursor: move;
`
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cadetblue;
`
const Info = styled.div`
  display: flex;
  background-color: bisque;
`
const Score = styled.div`
  display: flex;
  flex-direction: ${(props: ITaskProps) =>
    props.kanbanOption ? 'column' : 'row'};
  background-color: cornflowerblue;
`
const Avatars = styled.div`
  display: flex;
  background-color: goldenrod;
`

interface ITaskProps {
  data: ITaskState
  key: string
  kanbanOption: boolean
}

const Task: React.FC<ITaskProps> = props => {
  const [modal, setModal] = React.useState<boolean>(false)

  const onDragStart = (e: any) => {
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
          <span>{props.data.name}</span>
          <span>Team</span>
        </Titles>
        <Info>
          <div>13</div>
          <div>4/5</div>
          <div>2 days left</div>
        </Info>
        <Score>
          <div>100%</div>
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
