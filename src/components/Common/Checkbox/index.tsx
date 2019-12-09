import React from 'react'
import styled from 'styled-components'

const variables = {
  greenColor: '#3dd598'
}

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
    left: 2px;
    top: 2px;
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
  margin: 15px 0 0 10px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  input:checked ~ ${CheckboxCustom} {
    background-color: ${variables.greenColor};
    border-radius: 5px;
    opacity: 1;
    border: 2px solid ${variables.greenColor};
  }
  input:checked ~ ${CheckboxCustom}::after {
    transform: rotate(45deg) scale(1);
    opacity: 1;
    left: 5px;
    top: 2px;
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
  handleCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<IContentTitleProps> = props => {
  const { name, value, checked, handleCheckbox } = props

  return (
    <>
      <CheckboxLabel>
        <input
          type='checkbox'
          value={value}
          name={name}
          onChange={handleCheckbox}
          checked={checked}
        />
        <Text>{value}</Text>
        <CheckboxCustom />
      </CheckboxLabel>
    </>
  )
}

export default Checkbox
