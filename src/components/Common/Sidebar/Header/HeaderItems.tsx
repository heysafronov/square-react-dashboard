import * as React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
`
const TeamAvatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`
const TeamName = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #171725;
`
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
`

const HeaderItems = () => {
  const [opened, setOpened] = React.useState(true)

  const handleOpened = () => {
    setOpened(!opened)
  }

  return (
    <HeaderItemsWrapper>
      <FlexWrapperBetween>
        <TeamsTitle>Teams</TeamsTitle>
        <div onClick={handleOpened}>{opened ? <ArrowDown /> : <ArrowUp />}</div>
      </FlexWrapperBetween>
      {opened ? (
        <FlexWrapper>
          <TeamAvatar
            src={require('assets/images/team1.png')}
            alt='Team avatar'
          />
          <TeamName>Iconspace Team</TeamName>
        </FlexWrapper>
      ) : null}
      {opened ? <div>3</div> : null}
      <div>4</div>
    </HeaderItemsWrapper>
  )
}

export default HeaderItems
