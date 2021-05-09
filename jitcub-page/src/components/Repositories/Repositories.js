import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'
import Button from '../Button'

const StyledRepositories = styled.div`
`

const Container = styled.div`
`

const Bar = styled.div`
`

const SearchBar = styled.input`

`

function Repositories() {
  return (
    <StyledRepositories>
      <Container>
        <Bar>
          <SearchBar/>
          <Button label="Type" theme='main'/>
          <Button label="Language" theme='main'/>
          <Button label="Sort" theme='main'/>
          <Button label="New" theme='new'>
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
          </Button>
        </Bar>



      </Container>
    </StyledRepositories>
  )
}

export default Repositories