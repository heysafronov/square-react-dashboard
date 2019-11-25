import * as React from 'react'
import styled from 'styled-components'
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
    </ActionsWrapper>
  )
}

export default Actions
