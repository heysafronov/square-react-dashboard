import * as React from 'react'
import styled from 'styled-components'
import FormSocial from 'components/Login/Social'
import FormMain from 'components/Login/Form/FormMain'

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
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
      <h3>Login to your account</h3>
      <FormMain />
      <FormSocial />
    </FormSection>
  )
}

export default Form
