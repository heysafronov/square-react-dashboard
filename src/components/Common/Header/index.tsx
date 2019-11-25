import * as React from 'react'
import styled from 'styled-components'
import Logo from 'components/Common/Logo'
import Actions from 'components/Common/Header/Actions'

const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`
const DivWrapperLogo = styled.div`
  margin-left: 25px;
`
const DivWrapperActions = styled.div`
  margin-right: 25px;
`

const logoProps = {
  title: {
    size: 20,
    color: '#44444F',
    text: 'Square'
  },
  image: {
    size: 34,
    color: '#0062ff'
  }
}

const Header = () => {
  return (
    <HeaderWrapper>
      <DivWrapperLogo>
        <Logo {...logoProps} />
      </DivWrapperLogo>
      <DivWrapperActions>
        <Actions />
      </DivWrapperActions>
    </HeaderWrapper>
  )
}

export default Header
