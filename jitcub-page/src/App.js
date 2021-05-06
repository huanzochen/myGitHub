import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import FunctionBar from './components/FunctionBar/FunctionBar'

const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
`

function App() {
  return (
    <StyledApp>
      <NavBar></NavBar>
      <FunctionBar></FunctionBar>
    </StyledApp>
  )
}

export default App
