import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

import {
  StyledFunctionBar,
  Container,
  FunctionButton
} from './StyleFunctionBar'

import {
  changeSelected,
  selectOverview,
  selectRepositories
} from './functionbarSlice'

function FunctionBar({
  StyledFunctionBarClassName,
  ContainerClassName
}) {
  const dispatch = useDispatch()
  const selectedFunction = useSelector(state => state.functionbar.functionSelected)

  const functions = [
    {
      name: 'Overview',
      icon: faBookReader,
      url: '/'
    },
    { 
      name: 'Repositories',
      icon: faFolderOpen,
      url: '/repositories'
    }]

  const handleButtonClick = (event) => {
    dispatch(changeSelected(event.target.closest('div').id))
  }

  let content 

  content = functions.map((func) => {
    return <Link key={func.name} to={func.url}>
      <FunctionButton selected={selectedFunction === func.name ? true : false} onClick={handleButtonClick} id={func.name}>
        <FontAwesomeIcon icon={func.icon}></FontAwesomeIcon>
        <span> {func.name} </span>
      </FunctionButton>
    </Link>
  })

  return (
    <StyledFunctionBar className={StyledFunctionBarClassName}>
      <Container className={ContainerClassName}>
        {content}
      </Container>
    </StyledFunctionBar>
  )
}

export default FunctionBar