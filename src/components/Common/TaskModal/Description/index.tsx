import React from 'react'
import styled from 'styled-components'
import Shape from 'components/Common/Icons/Common/Shape'

const variables = {
  colorGray: '#92929d'
}
const Wrapper = styled.div`
  display: flex;
  svg {
    fill: ${variables.colorGray};
  }
`
const ShapeWrapper = styled.div`
  width: 20px;
`
const HeaderD = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const TitleD = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
  margin: 0 0 10px 10px;
`
const TextD = styled.span`
  margin-left: 10px;
  color: ${variables.colorGray};
  font-size: 14px;
`
interface IDescriptionProps {
  title: string
}

const Description: React.FC<IDescriptionProps> = props => {
  const { title } = props

  return (
    <Wrapper>
      <ShapeWrapper>
        <Shape />
      </ShapeWrapper>
      <HeaderD>
        <TitleD>Description</TitleD>
        <TextD>
          {title}. Next Friday should be done. Next Monday we should deliver the
          first iteration. Make sure, we have a good result to be delivered by
          the day.
        </TextD>
      </HeaderD>
    </Wrapper>
  )
}

export default Description
