import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 86px;
  height: 38px;
  @media (max-width: 450px) {
    display: none;
  }
`
const Input = styled.input`
  width: 86px;
  height: 38px;
  background: #f1f1f5;
  border-radius: 10px;
  border: none;
  transition: width 0.3s;
  font-size: 14px;
  text-align: center;
  line-height: 38px;
  color: #696974;
  ::placeholder {
    padding: 0 0 0 10px;
  }
  :focus {
    width: 120px;
    outline: none;
    padding: 0 10px;
    ::placeholder {
      opacity: 0;
    }
  }
`

const ActionsSearch = () => {
  return (
    <Wrapper>
      <Input type='search' placeholder='Find' />
    </Wrapper>
  )
}

export default ActionsSearch
