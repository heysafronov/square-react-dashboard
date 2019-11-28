import * as React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff',
  crossSize: 15
}

const Wrapper = styled.div`
  width: 400px;
  min-width: 250px;
  height: 140px;
  border: 2px dashed #d5d5dc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: white;
  border: none;
  position: relative;
  outline: none;
  cursor: not-allowed;
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

interface IButtonProps {
  name: string
}

const AddBigButton: React.FC<IButtonProps> = props => {
  return (
    <Wrapper>
      <Button>
        <Cross />
      </Button>
      <Text>{props.name}</Text>
    </Wrapper>
  )
}

export default AddBigButton
