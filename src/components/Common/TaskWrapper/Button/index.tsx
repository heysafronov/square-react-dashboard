import React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff',
  colorBorder: '#e2e2ea',
  crossSize: 16
}

const Cross = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 0;
    content: '';
    height: ${variables.crossSize}px;
    width: 2px;
    background-color: #92929d;
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.button`
  height: 35px;
  width: 100%;
  border-radius: 0 0 15px 15px;
  outline: none;
  border: 1px solid ${variables.colorBorder};
  position: relative;
  cursor: not-allowed;
  background-color: white;
  :hover {
    border: 1px dashed ${variables.color};
  }
  :hover ${Cross}:before {
    background-color: ${variables.color};
  }
  :hover ${Cross}:after {
    background-color: ${variables.color};
  }
`

const Button = () => {
  return (
    <Wrapper>
      <Cross />
    </Wrapper>
  )
}

export default Button
