import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { color, border } from '../../utils/color'
import Button from '../other/Button'
import { useSelector, useDispatch } from 'react-redux'

import DropDownIcon from '../other/DropDownIcon'
import Repo from './Repo'

import {
  fetchRepos,
  selectRepoIds
} from './reposSlice'
import { useEffect } from 'react'

const StyledRepositories = styled.div`
width: 75%;
`

const Container = styled.div`
`

const WrapperTopContainer = styled.div`
padding: 15px;
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
border: 2px solid ${border.main};
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
border-bottom: 1px solid ${border.main}; 
`


function Repositories() {
  const dispatch = useDispatch()
  const repoStatus = useSelector((state) => state.repos.repoStatus)
  const repoIds = useSelector(selectRepoIds)

  useEffect(() => {
    function initailize() {
      if (repoStatus === 'idle') {
        dispatch(fetchRepos())
      }
    }
    initailize()
  })

  let content
  if (repoStatus === 'loading') {
    content = <Repo type="loading"></Repo>
  } 
  else if (repoStatus === 'succeeded') {
    content = repoIds.map((repoId) => <Repo key={repoId} repoId={repoId} type="normal"> </Repo>)
  }
  else if (repoStatus === 'failed') {
    content = <Repo type="failed"> </Repo>
  }

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
                  <DropDownIcon color={color.primary}></DropDownIcon>
                </Button>
                <Button theme='main'>
                Language
                  <DropDownIcon color={color.primary}></DropDownIcon>
                </Button>
                <Button theme='main'>
                Sort
                  <DropDownIcon color={color.primary}></DropDownIcon>
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

        {content}

      </Container>
    </StyledRepositories>
  )
}

export default Repositories