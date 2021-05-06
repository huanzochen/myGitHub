import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import FunctionBar from './components/FunctionBar/FunctionBar'
import Profile from './components/Profile/Profile'

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
      <Profile></Profile>
    </StyledApp>
  )
}

export default App
