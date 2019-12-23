import React from 'react'

interface ILogoImageProps {
  size: number
  color: string
}

const Image: React.FC<ILogoImageProps> = props => {
  const { size, color } = props

  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='3'
        y='6.5'
        width='36'
        height='36'
        rx='12'
        stroke={`${color}`}
        strokeWidth='6'
      />
      <rect
        x='19.5'
        y='8'
        width='18'
        height='18'
        rx='9'
        stroke={`${color}`}
        strokeWidth='6'
      />
    </svg>
  )
}

export default Image
