import * as React from 'react'
import styled from 'styled-components'
import ActionsShape from 'components/Common/Header/Actions/ActionsShape'
import ActionsSearch from 'components/Common/Header/Actions/ActionsSearch'
import ActionsButton from 'components/Common/Header/Actions/ActionsButton'

const ActionsWrapper = styled.div`
  display: flex;
`

const Actions = () => {
  return (
    <ActionsWrapper>
      <ActionsSearch />
      <ActionsButton />
      <ActionsShape />
    </ActionsWrapper>
  )
}

export default Actions
