import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from 'components/Common/Logo'
import Actions from 'components/Common/Header/Actions'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`
const LogoWrapper = styled.div`
  margin-left: 25px;
  a {
    text-decoration: none;
  }
`
const ActionsWrapper = styled.div`
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
    <Wrapper>
      <LogoWrapper>
        <Link to='/'>
          <Logo {...logoProps} />
        </Link>
      </LogoWrapper>
      <ActionsWrapper>
        <Actions />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default Header
