import React from 'react'
import styled from 'styled-components'

const variables = {
  color: '#0062ff'
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props: ILoaderProps) =>
    props.height === 'none' ? 'none' : '98vh'};
  margin: 0 auto;
`
const Svg = styled.svg`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  animation: rotate 1.4s linear infinite;
`
const Circle = styled.circle`
  @keyframes colors {
    0% {
      stroke: ${variables.color};
    }
    100% {
      stroke: ${variables.color};
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
`

interface ILoaderProps {
  height?: string
}

const Loader: React.FC<ILoaderProps> = props => {
  return (
    <Wrapper {...props}>
      <Svg
        width='30px'
        height='30px'
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Circle
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        />
      </Svg>
    </Wrapper>
  )
}

export default Loader
