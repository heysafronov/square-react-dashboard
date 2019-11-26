import * as React from 'react'
import styled from 'styled-components'

const HeaderItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderItems = () => {
  return (
    <HeaderItemsWrapper>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </HeaderItemsWrapper>
  )
}

export default HeaderItems
