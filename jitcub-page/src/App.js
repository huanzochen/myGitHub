import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import FunctionBar from './components/FunctionBar/FunctionBar'
import Profile from './components/Profile/Profile'
import Repositories from './components/Repositories/Repositories'

const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
`

const MainPage = styled.div`
display:flex;
flex-direction: row;
`

function App() {
  return (
    <StyledApp>
      <NavBar></NavBar>
      <FunctionBar></FunctionBar>
      <MainPage>
        <Profile></Profile>
        <Repositories></Repositories>
      </MainPage>
    </StyledApp>
  )
}

export default App
