import styled from 'styled-components'
import { color, border } from '../../utils/color'

const StyledLoader = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 100px;
background: ${color.white};
z-index: 1000;

.loader {
  border: 5px solid ${border.main}; 
  border-top: 5px solid ${color.primary}; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

function Loader () {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  )
}

export default Loader