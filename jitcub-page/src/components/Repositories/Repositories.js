import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'
import Button from '../other/Button'

import DropDown from '../other/DropDown'

const StyledRepositories = styled.div`
width: 75%;
`

const Container = styled.div`
`

const WrapperTopContainer = styled.div`
padding:15px;
`

const WrapperTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 15px;

.wrapper {
  margin-right: 5px;
}
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
border-radius: 5px;
margin-right: 10px; 
`

const ClassifyButton = styled.div`
flex-grow: 1;
display: flex;
flex-direction: row;
button{
  margin-left: 5px;
  margin-right: 2px;
}
`

const BorderLine = styled.div`
border-bottom: 1px solid ${color.border}; 
`


function Repositories() {
  return (
    <StyledRepositories>
      <Container>
        <WrapperTopContainer>
          <WrapperTop>
            <Bar>
              <SearchBar/>
              <ClassifyButton>
                <Button theme='main'>
                Type
                  <DropDown color={color.primary}></DropDown>
                </Button>
                <Button theme='main'>
                Language
                  <DropDown color={color.primary}></DropDown>
                </Button>
                <Button theme='main'>
                Sort
                  <DropDown color={color.primary}></DropDown>
                </Button>

              </ClassifyButton>
            </Bar>
            <Button theme='new'>
              <FontAwesomeIcon icon={faPlusSquare} className='wrapper'></FontAwesomeIcon>
            New
            </Button>
         
          </WrapperTop>
          <BorderLine/>
        </WrapperTopContainer>




      </Container>
    </StyledRepositories>
  )
}

export default Repositories