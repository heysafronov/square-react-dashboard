import * as React from 'react'
import styled from 'styled-components'
import HeaderTeams from 'components/Common/Sidebar/Header/HeaderTeams'
import HeaderButton from 'components/Common/Sidebar/Header/HeaderButton'

const HeaderItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexWrapperBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
const Arrow = styled.div`
  border: solid #92929d;
  border-width: 0 2px 2px 0;
  display: flex;
  padding: 3px;
  cursor: pointer;
`
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`
const ArrowUp = styled(Arrow)`
  transform: rotate(135deg);
`
const TeamsTitle = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: #92929d;
  letter-spacing: 1px;
`

const HeaderItems = () => {
  const [opened, setOpened] = React.useState(true)

  const handleOpened = () => {
    setOpened(!opened)
  }

  return (
    <HeaderItemsWrapper>
      <FlexWrapperBetween onClick={handleOpened}>
        <TeamsTitle>Teams</TeamsTitle>
        <div>{opened ? <ArrowDown /> : <ArrowUp />}</div>
      </FlexWrapperBetween>
      {opened ? <HeaderTeams /> : null}
      <HeaderButton />
    </HeaderItemsWrapper>
  )
}

export default HeaderItems
