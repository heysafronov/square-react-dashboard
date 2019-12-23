import React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import ActionsShape from 'components/Common/Header/Actions/Shape'
import ActionsSearch from 'components/Common/Header/Actions/Search'
import ActionsButton from 'components/Common/Header/Actions/Button'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    justify-items: end;
  }
`

const userProps = {
  size: 32,
  name: 'KA',
  color: '',
  avatar: require('assets/images/james.png')
}

const Actions = () => {
  return (
    <Wrapper>
      <ActionsSearch />
      <ActionsButton />
      <ActionsShape />
      <Avatar {...userProps} />
    </Wrapper>
  )
}

export default Actions
