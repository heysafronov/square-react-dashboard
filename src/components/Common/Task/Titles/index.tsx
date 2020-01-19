import React from 'react'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'

const TextStyles = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #92929d;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled(TextStyles)`
  color: #171725;
  margin-bottom: 7px;
  text-decoration: ${(props: ITitleProps) =>
    props.data.score.days === 0 && 'line-through'};
`
const Team = styled(TextStyles)`
  color: #696974;
`

interface ITitleProps {
  data: ITaskState
}

const Titles: React.FC<ITitleProps> = props => {
  const { data } = props

  return (
    <Wrapper>
      <Title {...props}>{data.title}</Title>
      <Team>{data.team}</Team>
    </Wrapper>
  )
}

export default Titles
