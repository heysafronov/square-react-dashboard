import * as React from 'react'
import styled from 'styled-components'

const ActionsSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f5;
  border-radius: 10px;
  padding-left: 10px;
`

const Input = styled.input`
  width: 60px;
  height: 38px;
  background: #f1f1f5;
  border-radius: 10px;
  border: none;
  padding: 0 5px 0 10px;
  transition: width 0.3s;
  font-size: 14px;
  color: #696974;
  :focus {
    width: 200px;
    outline: none;
    ::placeholder {
      opacity: 0;
    }
  }
`

const ActionsSearch = () => {
  const searchIcon = (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.6829 15.6371C-0.894301 12.0599 -0.894301 6.2601 2.6829 2.6829C6.2601 -0.894301 12.0599 -0.894301 15.6371 2.6829C18.9069 5.95265 19.1879 11.0794 16.4802 14.6683L20.0943 18.2825C21.0371 19.2253 19.6229 20.6395 18.6801 19.6967L15.1092 16.1257C11.5103 19.2061 6.08905 19.0432 2.6829 15.6371ZM14.2229 4.09712C11.4267 1.30096 6.89327 1.30096 4.09712 4.09712C1.30096 6.89327 1.30096 11.4267 4.09712 14.2229C6.89327 17.019 11.4267 17.019 14.2229 14.2229C17.019 11.4267 17.019 6.89327 14.2229 4.09712Z'
        fill='#92929D'
      />
    </svg>
  )

  return (
    <ActionsSearchWrapper>
      {searchIcon}
      <Input type='search' placeholder='Find' />
    </ActionsSearchWrapper>
  )
}

export default ActionsSearch
