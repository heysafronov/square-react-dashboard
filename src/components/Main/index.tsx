import * as React from 'react'
import { AppState } from 'store'
import { AddOne } from 'store/counter/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import Menu from 'components/Menu'

const Title = styled.button`
  background-color: pink;
  color: white;
  font-size: 20px;
`

interface IMainProps {
  AddOne: typeof AddOne
  add: number
}

const Main: React.FC<IMainProps> = props => {
  return (
    <>
      <Header />
      <Sidebar />
      <Title onClick={props.AddOne}>Больше на 1</Title>
      <Menu />
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
