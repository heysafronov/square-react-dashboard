import * as React from 'react'
import styled from 'styled-components'

const ActionsShapeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`
const Notification = styled.div`
  background-color: #fc5a5a;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  position: absolute;
  right: -4px;
  top: -6px;
`

const ShapeIcon = () => {
  return (
    <svg
      width='19'
      height='21'
      viewBox='0 0 19 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.98 2.64094C11.8026 1.15337 10.5367 0 9.0013 0C7.46596 0 6.2 1.15337 6.02257 2.64094C3.5199 3.77546 1.77908 6.29555 1.77908 9.22222V14.2399L0.108582 17.5494C-0.227141 18.2145 0.25626 19 1.0013 19H6.17201C6.58385 20.1652 7.69509 21 9.0013 21C10.3075 21 11.4188 20.1652 11.8306 19H17.0013C17.7463 19 18.2297 18.2145 17.894 17.5494L16.2235 14.2399V9.22222C16.2235 6.29555 14.4827 3.77546 11.98 2.64094ZM14.3308 14.9286L15.3764 17H2.62623L3.6718 14.9286C3.74234 14.7888 3.77908 14.6345 3.77908 14.478V9.22222C3.77908 6.33807 6.11715 4 9.0013 4C11.8855 4 14.2235 6.33807 14.2235 9.22222V14.478C14.2235 14.6345 14.2603 14.7888 14.3308 14.9286Z'
        fill='#92929D'
      />
    </svg>
  )
}

const ActionShape = () => {
  const notification = true

  return (
    <ActionsShapeWrapper>
      <>
        {notification ? <Notification /> : null}
        {ShapeIcon()}
      </>
    </ActionsShapeWrapper>
  )
}

export default ActionShape
