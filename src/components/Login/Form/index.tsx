import * as React from 'react'
import styled from 'styled-components'

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  min-width: 320px;
  height: 365px;
  background-color: white;
  border-radius: 20px;
  margin: 35px 10px 25px 10px;
`

const Form = () => {
  return (
    <FormSection>
      <h2>Login to your acount</h2>
    </FormSection>
  )
}

export default Form
