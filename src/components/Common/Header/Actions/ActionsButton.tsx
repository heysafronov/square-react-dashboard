import * as React from 'react'
import styled from 'styled-components'

const ActionsButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0062ff;
  border-radius: 10px;
  width: 86px;
  height: 38px;
  border: none;
  cursor: pointer;
  outline: none;
  color: white;
  font-size: 14px;
`

const PathIcon = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 8H17C17.5523 8 18 8.44771 18 9C18 9.55229 17.5523 10 17 10H10V17C10 17.5523 9.55229 18 9 18C8.44771 18 8 17.5523 8 17V10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8H8V1C8 0.447715 8.44771 0 9 0C9.55229 0 10 0.447715 10 1V8Z'
        fill='white'
      />
    </svg>
  )
}

const ActionsButton = () => {
  return (
    <ActionsButtonWrapper>
      {PathIcon()}
      <span>New</span>
    </ActionsButtonWrapper>
  )
}

export default ActionsButton
