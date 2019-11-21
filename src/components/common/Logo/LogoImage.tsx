import * as React from 'react'

interface Props {
  size: number
  color: string
}

const LogoImage = (props: Props) => {
  return (
    <svg
      width='100'
      height='100'
      viewBox={`0 0 ${props.size} ${props.size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='3'
        y='6.5'
        width='36'
        height='36'
        rx='12'
        stroke={`${props.color}`}
        strokeWidth='6'
      />
      <rect
        x='19.5'
        y='8'
        width='18'
        height='18'
        rx='9'
        stroke={`${props.color}`}
        strokeWidth='6'
      />
    </svg>
  )
}

export default LogoImage
