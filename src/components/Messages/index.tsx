import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import { AddOne } from 'store/counter/actions'

const MainWrapper = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`
const Title = styled.button`
  background-color: pink;
  color: white;
  font-size: 20px;
`

interface IMainProps {
  AddOne: typeof AddOne
  add: number
}

const Messages: React.FC<IMainProps> = props => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <div>
          <Title onClick={props.AddOne}>Больше на 1</Title>
          <span>{props.add}</span>
        </div>
      </MainWrapper>
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
)(Messages)
