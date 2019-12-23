import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { switchKanban } from 'store/show/actions'
import GanttIcon from 'components/Common/Icons/Switcher/Gantt'
import KanbanIcon from 'components/Common/Icons/Switcher/Kanban'
import DefaultIcon from 'components/Common/Icons/Switcher/Default'

const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;
  @media (max-width: 450px) {
    display: none;
  }
`
const Icon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  svg {
    fill: #b5b5be;
  }
`
const Kanban = styled<SwitcherProps>(Icon)`
  border-radius: 10px 0 0 10px;
  background-color: ${(props: SwitcherProps) => (props.type ? '#b5b5be' : '#fff')};
  svg {
    fill: ${(props: SwitcherProps) => (props.type ? '#fff' : '#b5b5be')};
  }
`
const Default = styled(Icon)`
  border-right: 1px solid #f1f1f5;
  border-left: 1px solid #f1f1f5;
  background-color: ${(props: SwitcherProps) => (props.type ? '#b5b5be' : '#fff')};
  svg {
    fill: ${(props: SwitcherProps) => (props.type ? '#fff' : '#b5b5be')};
  }
`
const Gantt = styled(Icon)`
  border-radius: 0 10px 10px 0;
  cursor: not-allowed;
`

type SwitcherProps = {
  type: boolean | number
}

interface IContentTitleSwitcherProps {
  switcher: typeof switchKanban
}

const Switcher: React.FC<IContentTitleSwitcherProps> = props => {
  const { switcher } = props

  const [typeKanban, setTypeKanban] = React.useState<boolean>(true)
  const [typeDefault, setTypeDefault] = React.useState<boolean>(false)

  const handleTypeKanban = () => {
    switcher(true)
    setTypeKanban(true)
    setTypeDefault(false)
  }

  const handleTypeDefault = () => {
    switcher(false)
    setTypeDefault(true)
    setTypeKanban(false)
  }

  return (
    <Wrapper>
      <Kanban type={typeKanban ? 1 : 0} onClick={handleTypeKanban}>
        <KanbanIcon />
      </Kanban>
      <Default type={typeDefault ? 1 : 0} onClick={handleTypeDefault}>
        <DefaultIcon />
      </Default>
      <Gantt>
        <GanttIcon />
      </Gantt>
    </Wrapper>
  )
}

const mapDispatchToProps = {
  switcher: switchKanban
}

export default connect(
  null,
  mapDispatchToProps
)(Switcher)
