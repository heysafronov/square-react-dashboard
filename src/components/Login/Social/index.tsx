import React from 'react'
import styled from 'styled-components'
import IconGoogle from 'components/Common/Icons/SocialMedia/Google'
import IconFacebook from 'components/Common/Icons/SocialMedia/Facebook'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.span`
  margin: 15px 0;
  color: #92929d;
  font-size: 12px;
  text-transform: uppercase;
`
const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 38px;
  border: none;
  background: #fc5a5a;
  border-radius: 10px;
  cursor: not-allowed;
  :focus {
    outline: none;
  }
  span {
    margin-left: 10px;
    color: white;
    font-size: 12px;
  }
`
const ButtonFacebook = styled(ButtonGoogle)`
  background: #50b5ff;
  margin-top: 10px;
`

const Social = () => {
  return (
    <Wrapper>
      <Text>or</Text>
      <ButtonGoogle>
        <IconGoogle />
        <span>Continue with Google</span>
      </ButtonGoogle>
      <ButtonFacebook>
        <IconFacebook />
        <span>Continue with Facebook</span>
      </ButtonFacebook>
    </Wrapper>
  )
}

export default Social
