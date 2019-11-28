import * as React from 'react'
import styled from 'styled-components'

const TeamsWrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`
const TeamsTitle = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`
const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const NewTeam = styled.div`
  width: 400px;
  height: 144px;
  border: 1.5px dashed #d5d5dc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NewTeamButton = styled.button`
width: 38px;
height: 38px;
border-radius: 38px;
background-color: white;
border: 1px solid pink;
`

const ContentTeams = () => {
  return (
    <TeamsWrapper>
      <TeamsTitle>Teams</TeamsTitle>
      <Teams>
        <NewTeam ><NewTeamButton/></NewTeam>
      </Teams>
    </TeamsWrapper>
  )
}

export default ContentTeams
