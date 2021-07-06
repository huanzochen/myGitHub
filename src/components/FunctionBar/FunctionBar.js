import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { color, border } from '../../utils/color'

const StyledFunctionBar = styled.div`
border-bottom: 1px solid ${border.main};
`
const Container = styled.div`
display:flex;
justify-content:center;
`

const FunctionButton = styled.div`
display: flex;
align-items: center;
font-weight: 600;
padding-left: 15px;
padding-right: 15px;
border-bottom: 2px solid ${props => {
  // 如果遇到選擇的標籤就用 important 強制設定顏色,暫時想不到更好的解法
    if (props.selected) return color.pink + ' !important'
    else { return 'transparent' }
  }};
}; 
.wrapper{
margin-left:10px;
}
&:hover{
  border-bottom: 2px solid ${border.main};
}
`

function FunctionBar() {
  return (
    <StyledFunctionBar>
      <Container>

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