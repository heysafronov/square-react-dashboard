import React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff',
  crossSize: 18,
  colorWhite: '#fff'
}

const Cross = styled.div`
  position: absolute;
  left: 20px;
  top: 10px;
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 0;
    content: '';
    height: ${variables.crossSize}px;
    width: 2px;
    background-color: ${variables.colorWhite};
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${variables.color};
  border-radius: 10px;
  width: 86px;
  height: 38px;
  border: none;
  cursor: not-allowed;
  outline: none;
  color: ${variables.colorWhite};
  font-size: 14px;
  :hover {
    background-color: ${variables.colorWhite};
    border: 1px solid ${variables.color};
    color: ${variables.color};
  }
  :hover ${Cross}:before {
    background-color: ${variables.color};
  }
  :hover ${Cross}:after {
    background-color: ${variables.color};
  }
  @media (max-width: 450px) {
    display: none;
  }
`

const Button = () => {
  return (
    <Wrapper>
      <div>
        <Cross />
      </div>
      <span>New</span>
    </Wrapper>
  )
}

export default Button
