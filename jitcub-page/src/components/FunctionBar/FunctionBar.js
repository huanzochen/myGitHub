import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'

const StyledFunctionBar = styled.div`
border-bottom: 1px solid ${color.border};
`
const Container = styled.div`
display:flex;
justify-content:center;
`

const FunctionButton = styled.div`
display: flex;
align-items: center;
font-weight: 400;
padding-left: 15px;
padding-right: 15px;
.wrapper{
margin-left:10px;
}

// 這邊要做 active 時的狀態變化, 要怎做待切版完思考
/* .active{ */
    border-bottom: 2px solid pink;
/* } */
`


function FunctionBar() {
  return (
    <StyledFunctionBar>
      <Container>

        <FunctionButton>
          <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
          <p className='wrapper'>Overview</p>
        </FunctionButton>
        <FunctionButton>
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