import * as React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Common/Avatar'
import ActionsShape from 'components/Common/Header/Actions/ActionsShape'
import ActionsSearch from 'components/Common/Header/Actions/ActionsSearch'
import ActionsButton from 'components/Common/Header/Actions/ActionsButton'

const ActionsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;
`

const userProps = {
  name: 'KA',
  color: '',
  avatar: require('assets/images/james.jpg')
}

const Actions = () => {
  return (
    <ActionsWrapper>
      <ActionsSearch />
      <ActionsButton />
      <ActionsShape />
      <Avatar {...userProps} />
    </ActionsWrapper>
  )
}

export default Actions
