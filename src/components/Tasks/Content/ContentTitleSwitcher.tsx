import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { switchKanban } from 'store/show/actions'

interface IContentTitleSwitcherProps {
  switchKanban: typeof switchKanban
}

const ContentTitleSwitcher: React.FC<IContentTitleSwitcherProps> = props => {
  const handleSwitcher = (option: boolean): void => {
    props.switchKanban(option)
  }

  return (
    <div>
      <div onClick={() => handleSwitcher(true)}>On</div>
      <div onClick={() => handleSwitcher(false)}>Off</div>
    </div>
  )
}

export default connect(
  null,
  { switchKanban }
)(ContentTitleSwitcher)
