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
import SelectMenu from '../other/SelectMenu'

import {
  fetchRepos,
  selectRepoIds,
  selectRepoIdsPart,
  moreData,
  selectAllRepos
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
  const allRepos = useSelector(selectAllRepos)

  const [hasMoreData, setHasMoreData] = useState(false)
  const [searchValue, setSearchValue] = useState('') 
  const [searchedRepoIds, setSearchedRepoIds] = useState([])
  const [languageIsClick, setLanguageIsClick] = useState(false)
  const [languageSelect, setLanguageSelect] = useState('true')
  const languageTypes = ['true', 'Javascript', 'Shell', 'Python', 'Powershell', 'HTML', 'CSS']
  const [sortIsClick, setsortIsClick] = useState(false)
  const [sortSelect, setSortSelect] = useState('Last Updated')
  const sortTypes = ['Last Updated', 'Name']

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

  useEffect(() => {
    const re = new RegExp(searchValue.toLowerCase(), 'g')
    const searchResultIds = allRepos.filter((data) => {
      return data.name.toLowerCase().match(re)
    }).map((data) => data.id)
    setSearchedRepoIds(searchResultIds)
  }, [searchValue, setSearchValue, allRepos, setSearchedRepoIds])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleLanguageMenuChange = (e) => {
    setLanguageSelect(e.target.value)
  }
  const handleSortMenuChange = (e) => {
    setSortSelect(e.target.value)
  }

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
              <SearchBar name="search" value={searchValue} onChange={handleSearchChange}/>
              <ClassifyButton>
                <div>
                  <Button theme='main' onClick={() => { setLanguageIsClick(!languageIsClick) }}>
                    Language
                    <DropDownIcon color={color.primary} />
                  </Button>
                  <SelectMenu selectType={languageSelect} types={languageTypes}
                    onChange={handleLanguageMenuChange}
                    className={languageIsClick ? '' : 'hide'} />
                </div>
                <div>
                  <Button theme='main' onClick={() => { setsortIsClick(!sortIsClick) }}>
                  Sort
                    <DropDownIcon color={color.primary} />
                  </Button>
                  <SelectMenu selectType={sortSelect} types={sortTypes} 
                    onChange={handleSortMenuChange}
                    className={sortIsClick ? '' : 'hide'} />
                </div>
              </ClassifyButton>
            </Bar>
            <Button theme="new" className="newbutton">
              <FontAwesomeIcon icon={faPlusSquare} className='wrapper'></FontAwesomeIcon>
              New
            </Button>
          </WrapperTop>
          <BorderLine/>
        </WrapperTopContainer>

        {(() => {
          if (searchValue === '') {
            return (
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
            )
          } 
          else { 
            return (
              searchedRepoIds.map((repoId) => <Repo key={repoId} repoId={repoId} type="normal"> </Repo>)
            )
          }
        })()
        }


      </Container>
    </StyledRepositories>
  )
}

export default Repositories