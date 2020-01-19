import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import { getKanbanOption } from 'store/show/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props: IScoreProps) =>
    props.option ? 'column' : 'row-reverse'};
  align-items: ${(props: IScoreProps) => !props.option && 'center'};
`
const ScoreLine = styled.div`
  background-color: #e2e2ea;
  width: 100%;
  height: 3px;
  border-radius: 2.5px;
  min-width: ${(props: IScoreProps) => !props.option && '150px'};
  div {
    height: 3px;
    background-color: #3dd598;
    width: ${(props: IScoreProps) => `${props.data.line}%`};
  }
`
const ScoreLineTitle = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #696974;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: ${(props: IScoreProps) => !props.option && '10px'};
`

interface IScoreProps {
  data: ITaskState
  option: boolean
}

const Score: React.FC<IScoreProps> = props => {
  const { data } = props

  return (
    <Wrapper {...props}>
      <ScoreLineTitle {...props}>{data.line}%</ScoreLineTitle>
      <ScoreLine {...props}>
        <div />
      </ScoreLine>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    option: getKanbanOption(state)
  }
}

export default connect(mapStateToProps)(Score)
