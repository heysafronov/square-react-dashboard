import * as React from 'react'
import styled from 'styled-components'
import ActionsSearch from 'components/Common/Header/Actions/ActionsSearch'

const ActionsWrapper = styled.div`
  display: flex;
`

const Actions = () => {
  return (
    <ActionsWrapper>
      <ActionsSearch />
    </ActionsWrapper>
  )
}

export default Actions
