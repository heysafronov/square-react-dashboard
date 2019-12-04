import React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { showMore } from 'store/show/actions'
import { IShowTypes } from 'store/show/types'
import { getShowState } from 'store/show/selectors'

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  z-index: 1;
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
const ShowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
`
const Show = styled.span`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #696974;
`
const What = styled.span`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: #44444f;
  margin-left: 10px;
`

interface IContentTitleProps {
  showMore: typeof showMore
  showState: IShowTypes
}

const ContentTitleSelector: React.FC<IContentTitleProps> = props => {
  const [opened, setOpened] = React.useState<boolean>(false)
  const [filter, setFilter] = React.useState<string[]>(['All tasks'])

  const handleOpened = (e: React.ChangeEvent<any>) => {
    if (e.target === e.currentTarget) {
      setOpened(prevState => !prevState)
    }
  }

  const handleOpenedSimple = (): void => {
    setOpened(prevState => !prevState)
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    setFilter([value])
    props.showMore({ ...props.showState, [name]: !props.showState[name] })
  }

  return (
    <Sort onClick={handleOpened}>
      <ShowWrapper onClick={handleOpenedSimple}>
        <Show>Show:</Show>
        <What>{filter[filter.length - 1]}</What>
      </ShowWrapper>
      <ArrowWrapper onClick={handleOpenedSimple}>
        {opened ? <ArrowDown /> : <ArrowUp />}
      </ArrowWrapper>
      {opened ? (
        <Select>
          <label>
            <input
              type='checkbox'
              value='Backlog'
              name='backlog'
              onChange={handleCheckbox}
              checked={props.showState.backlog}
            />
            Backlog
          </label>
          <label>
            <input
              type='checkbox'
              value='In progress'
              name='progress'
              onChange={handleCheckbox}
              checked={props.showState.progress}
            />
            In progress
          </label>
          <label>
            <input
              type='checkbox'
              value='Complete'
              name='complete'
              onChange={handleCheckbox}
              checked={props.showState.complete}
            />
            Complete
          </label>
        </Select>
      ) : null}
    </Sort>
  )
}

const mapStateToProps = (state: AppState) => ({
  showState: getShowState(state)
})

const mapDispatchToProps = {
  showMore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentTitleSelector)
