import * as React from 'react'
import { AddOne } from 'actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

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

const mapStateToProps = state => {
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
