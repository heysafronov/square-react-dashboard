import * as React from 'react'
import styled from 'styled-components'

const HeaderButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  cursor: pointer;
`
const TextButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #0062ff;
  border: none;
`
const Cross = styled.div`
  width: 7px;
  height: 7px;
  :before,
  :after {
    position: absolute;
    left: 2px;
    content: '';
    height: 7px;
    width: 1px;
    background-color: #0062ff;
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`

const HeaderButton = () => {
  return (
    <HeaderButtonWrapper>
      <TextButton>
        <Cross />
        <span>Add new team</span>
      </TextButton>
    </HeaderButtonWrapper>
  )
}

export default HeaderButton
