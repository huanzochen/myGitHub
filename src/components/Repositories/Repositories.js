import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import { color, border } from '../../utils/color'
import FunctionBar from '../FunctionBar/FunctionBar'
import Button from '../other/Button'
import DropDownIcon from '../other/DropDownIcon'
import Loader from '../other/Loader'
import Repo from './Repo'
import InfiniteScroll from '../other/InfiniteScroll'

import {
  fetchRepos,
  selectRepoIds,
  selectRepoIdsPart,
  moreData
} from './reposSlice'

import {
  StyledRepositories,
  Container,
  WrapperTopContainer,
  WrapperTop,
  Bar,
  SearchBar,
  ClassifyButton,
  BorderLine
} from './StyleRepositories'

function Repositories() {
  const dispatch = useDispatch()
  const repoStatus = useSelector((state) => state.repos.repoStatus)
  const repoIds = useSelector(selectRepoIds)
  const page = useSelector((state) => state.repos.page)
  const repoIdsPart = useSelector((state) => selectRepoIdsPart(state, page))

  const [hasMoreData, setHasMoreData] = useState(false)

  useEffect(() => {
    function initialize() {
      if (repoStatus === 'idle') {
        dispatch(fetchRepos())
      }
    }
    initialize()
  })

  useEffect(() => {
    repoIds.length > repoIdsPart.length ? setHasMoreData(true) : setHasMoreData(false)
  }, [repoIds, repoIdsPart])

  let content
  if (repoStatus === 'loading') {
    content = <Repo type="loading"></Repo>
  } 
  else if (repoStatus === 'succeeded') {
    content = repoIdsPart.map((repoId) => <Repo key={repoId} repoId={repoId} type="normal"> </Repo>)
  }
  else if (repoStatus === 'failed') {
    content = <Repo type="failed"> </Repo>
  }

  return (
    <StyledRepositories>
      <Container>
        <FunctionBar StyledFunctionBarClassName="mobile" ContainerClassName="container"></FunctionBar>
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
            <Button theme="new" className="newbutton">
              <FontAwesomeIcon icon={faPlusSquare} className='wrapper'></FontAwesomeIcon>
              New
            </Button>
          </WrapperTop>
          <BorderLine/>
        </WrapperTopContainer>

        <InfiniteScroll
          dataLength={repoIdsPart}
          next={() => {
            dispatch(moreData())
          }}
          hasMore={hasMoreData}
          loader={<Loader/>}
        >

          {content}

        </InfiniteScroll>

      </Container>
    </StyledRepositories>
  )
}

export default Repositories