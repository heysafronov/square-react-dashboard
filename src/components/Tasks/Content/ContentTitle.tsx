import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Title = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #171725;
`
const Sort = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 200px;
  height: 38px;
  box-shadow: 0 0 7px rgba(41, 41, 50, 0.1);
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
`
const Select = styled.div`
  position: absolute;
  width: 199px;
  height: 149px;
  left: 0;
  top: 39px;
  background: white;
  border: 1px solid #f1f1f5;
  box-shadow: 0 5px 15px rgba(68, 68, 79, 0.1);
  border-radius: 8px;
`
const ArrowWrapper = styled.div`
  height: 100%;
  width: 30px;
  border-left: 1px solid #f1f1f5;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Arrow = styled.div`
  height: 0;
  width: 0;
  border: solid #92929d;
  border-width: 0 2px 2px 0;
  display: flex;
  padding: 3px;
`
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`
const ArrowUp = styled(Arrow)`
  transform: rotate(135deg);
`

const ContentTitle = () => {
  const [opened, setOpened] = React.useState<boolean>(false)

  const handleOpened = (e: any): void => {
    e.preventDefault()
    if (e.target === e.currentTarget) {
      setOpened(!opened)
    }
  }

  return (
    <Wrapper>
      <Title>Tasks</Title>
      <Sort onClick={handleOpened}>
        <ArrowWrapper onClick={handleOpened}>
          {opened ? <ArrowDown /> : <ArrowUp />}
        </ArrowWrapper>
        {opened ? <Select /> : null}
      </Sort>
    </Wrapper>
  )
}

export default ContentTitle
