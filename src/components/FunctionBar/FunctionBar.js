import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

import {
  StyledFunctionBar,
  Container,
  FunctionButton
} from './StyleFunctionBar'

function FunctionBar({
  StyledFunctionBarClassName,
  ContainerClassName
}) {
  return (
    <StyledFunctionBar className={StyledFunctionBarClassName}>
      <Container className={ContainerClassName}>
        <FunctionButton>
          <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
          <p className='wrapper'>Overview</p>
        </FunctionButton>
        <FunctionButton selected={true}>
          <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
          <p className='wrapper'>Repositories</p>
        </FunctionButton>
        <FunctionButton>
          <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
          <p className='wrapper'>Projects</p>
        </FunctionButton>
        <FunctionButton>
          <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>
          <p className='wrapper'>Package</p>
        </FunctionButton>

      </Container>
    </StyledFunctionBar>
  )
}

export default FunctionBar