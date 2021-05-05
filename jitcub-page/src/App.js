import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'

const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
`

function App() {
  return (
    <StyledApp>
      <Navbar></Navbar>
    </StyledApp>
  )
}

export default App
