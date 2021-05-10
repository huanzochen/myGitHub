import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'
import Button from '../Button'

const StyledRepositories = styled.div`
flex-grow: 1;
`

const Container = styled.div`
`

const WrapperTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding:20px;
`

const Bar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-grow: 1;
`

const SearchBar = styled.input`
flex-grow: 3;
max-width: 600px;
border: 2px solid ${color.border};
padding: 5px;
border-radius:5px;
margin-left: 5px;
margin-right: 5px;
`

const WrapperButton = styled.div`
flex-grow: 1;
display: flex;
flex-direction: row;
button{
  margin-left: 5px;
  margin-right: 5px;
}
`




function Repositories() {
  return (
    <StyledRepositories>
      <Container>
        <WrapperTop>
          <Bar>
            <SearchBar/>
            <WrapperButton>
              <Button theme='main'>Type</Button>
              <Button theme='main'>Language</Button>
              <Button theme='main'>Sort</Button>

            </WrapperButton>
          </Bar>
          <Button theme='new'>
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
            New
          </Button>
        </WrapperTop>



      </Container>
    </StyledRepositories>
  )
}

export default Repositories