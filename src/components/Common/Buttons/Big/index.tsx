import React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff',
  crossSize: 15
}

const Wrapper = styled.div`
  width: 400px;
  min-width: 250px;
  height: 140px;
  border: 2px dashed ${variables.color};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: not-allowed;
    border: 2px dashed #d5d5dc;
  }
`
const Button = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: white;
  border: none;
  position: relative;
  outline: none;
`
const Cross = styled.div`
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 50%;
    content: '';
    height: ${variables.crossSize}px;
    width: 2px;
    background-color: ${variables.color};
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`
const Text = styled.span`
  font-size: 14px;
  margin-left: 5px;
`

interface IBigProps {
  name: string
}

const Big: React.FC<IBigProps> = props => {
  const { name } = props

  return (
    <Wrapper>
      <Button>
        <Cross />
      </Button>
      <Text>{name}</Text>
    </Wrapper>
  )
}

export default React.memo(Big)
