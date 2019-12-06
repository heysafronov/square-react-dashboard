import React from 'react'
import styled from 'styled-components'

const CheckboxCustom = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #b5b5be;
  ::after {
    position: absolute;
    content: '';
    left: 12px;
    top: 12px;
    height: 0;
    width: 0;
    border-radius: 5px;
    border: solid white;
    border-width: 0 3px 3px 0;
    opacity: 1;
  }
`
const CheckboxLabel = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #696974;
  margin: 15px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  input:checked ~ ${CheckboxCustom} {
    background-color: #3dd598;
    border-radius: 5px;
    opacity: 1;
    border: 2px solid #3dd598;
  }
  input:checked ~ ${CheckboxCustom}::after {
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 40%;
    top: 25%;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
  }
`
const Text = styled.span`
  margin: 0 0 0 30px;
`

interface IContentTitleProps {
  name: string
  value: string
  checked: boolean
  handleCheckbox: () => void
}

const Checkbox: React.FC<IContentTitleProps> = props => {
  return (
    <>
      <CheckboxLabel>
        <input
          type='checkbox'
          value={props.value}
          name={props.name}
          onChange={props.handleCheckbox}
          checked={props.checked}
        />
        <Text>{props.value}</Text>
        <CheckboxCustom />
      </CheckboxLabel>
    </>
  )
}

export default Checkbox
