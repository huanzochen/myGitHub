import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import FunctionBar from './components/FunctionBar/FunctionBar'
import Profile from './components/Profile/Profile'
import Overview from './components/Overview/Overview'
import Repositories from './components/Repositories/Repositories'
import { device } from './utils/device'

const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
display: flex;
flex-direction: column;

.desktop {
  display: block;
  .container {
    justify-content: center;
  }
}

@media ${device.mobileL} {
  .desktop {
    display: none;
  }
}
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

@media ${device.mobileL} {
  flex-direction: column;
}
`

const MainPageRight = styled.div`
width: 75%;

.mobile {
  display: none;
}

@media ${device.mobileL} {
width: 100%;
  .mobile {
    display: block;
    overflow-x: auto;
    .container {
      justify-content: flex-start;
    }
  }
}
`

function App() {
  return (
    <StyledApp>
      <NavBar></NavBar>
      <FunctionBar StyledFunctionBarClassName="desktop" ContainerClassName="container"></FunctionBar>
      <Router>
        <MainPage>
          <Container>
            <Profile></Profile>
            <MainPageRight>
              <Switch>
                <Route path="/" exact component={Overview} ></Route>
                <Route path="/repositories" exact component={Repositories} ></Route>
              </Switch>
            </MainPageRight>
          </Container>
        </MainPage>
      </Router>
    </StyledApp>
  )
}

export default App
