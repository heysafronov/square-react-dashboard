import * as React from 'react'
import { AddOne } from 'actions/counter'
import { connect } from 'react-redux'
import styled from 'styled-components'
import AppState from 'reducers'

const Title = styled.button`
  background-color: pink;
  color: white;
  font-size: 20px;
`

const Main = props => {
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
