import { useRef, useState, useEffect } from 'react'
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
  selectAllRepos,
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
  WrapperMenu,
  SelectMenuModal,
  BorderLine
} from './StyleRepositories'

function Repositories() {
  const dispatch = useDispatch()
  const repoStatus = useSelector((state) => state.repos.repoStatus)
  const repoIds = useSelector(selectRepoIds)
  const page = useSelector((state) => state.repos.page)
  const repoIdsPart = useSelector((state) => selectRepoIdsPart(state, page))
  const allRepos = useSelector(selectAllRepos)
  const closeLanguageSelect = useRef(null)
  const closeSortSelect = useRef(null)

  const [hasMoreData, setHasMoreData] = useState(false)
  const [searchValue, setSearchValue] = useState('') 
  const [searchedRepoIds, setSearchedRepoIds] = useState([])
  const [languageIsClick, setLanguageIsClick] = useState(false)
  const [languageSelect, setLanguageSelect] = useState('true')
  const languageTypes = ['true', 'JavaScript', 'Shell', 'Python', 'Powershell', 'HTML', 'CSS']
  const [sortIsClick, setSortIsClick] = useState(false)
  const [sortSelect, setSortSelect] = useState('Last Updated')
  const sortTypes = ['Last Updated', 'Name']

  const handleCloseOutside = (ref, ref2) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && languageIsClick) setLanguageIsClick(!languageIsClick)
        if (ref2.current && !ref2.current.contains(event.target) && sortIsClick) setSortIsClick(!sortIsClick)
      }
      // Bind event Listener
      document.addEventListener('click', handleClickOutside)
      return () => {
        // unbind the event listener to clean up
        document.removeEventListener('click', handleClickOutside)
      }
    }, [ref, languageIsClick, sortIsClick])
  }
  handleCloseOutside(closeLanguageSelect, closeSortSelect)

  /**
   * 這邊的 useEffects skipping Effects 在考慮設定成 
   * 1. [repoIds] 每次 repoIds 變更時才會跑
   * 2. [] 只會跑一次 
   *  */ 
  useEffect(() => {
    function initialize() {
      console.log('init fetch repos data...')
      if (repoStatus === 'idle') {
        dispatch(fetchRepos())
      }
    }
    initialize()
  }, [repoIds]) 

  useEffect(() => {
    repoIds.length > repoIdsPart.length ? setHasMoreData(true) : setHasMoreData(false)
  }, [repoIds, repoIdsPart])

  useEffect(() => {
    const re = new RegExp(searchValue.toLowerCase(), 'g')
    const searchResultIds = allRepos.filter((data) => {
      return data.name.toLowerCase().match(re)
    }).filter(data => {
      if (languageSelect === 'true') return true
      else {
        if (data.language) { return data.language.toLowerCase().match(languageSelect.toLowerCase()) } 
      }
      return false
    }).sort(function(a, b) {
      if (sortSelect === 'Last Updated') return a.updated_at > b.updated_at
      else if (sortSelect === 'Name') return a.name.localeCompare(b.name)
    }).map((data) => data.id)
    setSearchedRepoIds(searchResultIds)
  }, [searchValue, languageSelect, sortSelect, allRepos])

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleLanguageMenuChange = (e) => {
    setLanguageSelect(e.target.value)
  }
  const handleLanguageMenuClose = () => {
    setLanguageIsClick(!languageIsClick)
  }
  const handleSortMenuChange = (e) => {
    setSortSelect(e.target.value)
  }
  const handleSortMenuClose = (e) => {
    setSortIsClick(!sortIsClick)
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
                <WrapperMenu>
                  <Button theme='main' onClick={handleLanguageMenuClose}>
                    Language
                    <DropDownIcon color={color.primary} />
                  </Button>
                  <SelectMenuModal ref={closeLanguageSelect}>
                    <SelectMenu discription="Select Language"
                      selectType={languageSelect} types={languageTypes}
                      onChange={handleLanguageMenuChange}
                      onClose={handleLanguageMenuClose}
                      className={languageIsClick ? '' : 'hide'} />
                  </SelectMenuModal>
                </WrapperMenu>
                <WrapperMenu>
                  <Button theme='main' onClick={handleSortMenuClose}>
                    Sort
                    <DropDownIcon color={color.primary} />
                  </Button>
                  <SelectMenuModal ref={closeSortSelect}>
                    <SelectMenu discription="Select Order"
                      selectType={sortSelect} types={sortTypes} 
                      onChange={handleSortMenuChange}
                      onClose={handleSortMenuClose}
                      className={sortIsClick ? '' : 'hide'} />
                  </SelectMenuModal>
                </WrapperMenu>
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
          if (searchValue !== '' || languageSelect !== 'true' || sortSelect !== 'Last Updated') { 
            return (
              searchedRepoIds.map((repoId) => <Repo key={repoId} repoId={repoId} type="normal"> </Repo>)
            )
          }
          else if (searchValue === '') {
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
        })()
        }
      </Container>
    </StyledRepositories>
  )
}

export default Repositories