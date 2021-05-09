import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'

const StyledRepositories = styled.div`
`

const Container = styled.div`
`

const Bar = styled.div`
`

const SearchBar = styled.input`

`

const Button = styled.button.attrs(props => ({
  type: 'button'
}))`
  height: 30px;
  font-weight: 700;
  font-family: system-ui;
  border: 1.5px solid ${color.border_dark};
  border-radius: 5px;
  background: ${color.button};
  text-decoration: none;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  `


function Repositories() {
  return (
    <StyledRepositories>
      <Container>
        <Bar>
          <SearchBar/>
          <Button>Type</Button>
          <Button>Language</Button>
          <Button>Sort</Button>
          <Button>
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
              New
          </Button>
        </Bar>



      </Container>
    </StyledRepositories>
  )
}

export default Repositories