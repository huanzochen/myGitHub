import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'
import FunctionBar from './components/FunctionBar/FunctionBar'
import Profile from './components/Profile/Profile'
import Repositories from './components/Repositories/Repositories'

const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
display: flex;
flex-direction: column;
`

const MainPage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const Container = styled.div`
width: 100%;
max-width: 1280px;
display: flex;
flex-direction: row;
justify-content: center;
`

function App() {
  return (
    <StyledApp>
      <NavBar></NavBar>
      <FunctionBar></FunctionBar>
      <MainPage>
        <Container>
          <Profile></Profile>
          <Repositories></Repositories>
        </Container>
      </MainPage>
    </StyledApp>
  )
}

export default App
