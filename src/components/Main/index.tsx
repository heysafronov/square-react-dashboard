import * as React from 'react'
import { AddOne } from 'store/counter/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { AppState } from 'store'

const Title = styled.button`
  background-color: pink;
  color: white;
  font-size: 20px;
`

interface MainProps {
  AddOne: typeof AddOne
  add: number
}

const Main: React.FC<MainProps> = props => {
  console.log(props)
  return (
    <>
      <Title onClick={props.AddOne}>Больше на 1</Title>
      <span>{props.add}</span>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    add: state.addOneStore.addOne
  }
}

const mapDispatchToProps = {
  AddOne
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
