import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCopy } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { formatDistance } from 'date-fns'

import Button from '../other/Button'
import Loader from '../other/Loader'

import {
  selectRepoById
} from './reposSlice'
import {
  StyledRepo,
  Container,
  Main,
  Title,
  Description,
  Type,
  Info,
  Activity,
  BorderLine
} from './StyleRepo'

function Repo ({ repoId, type }) {
  const repo = useSelector(state => selectRepoById(state, repoId))

  switch (type) {
  case 'normal':
    let language
    language = 
    repo.language ? <div> {repo.language} </div> 
      : ''

    let license
    license = 
    repo.license ? 
      <div>
        <FontAwesomeIcon icon={faCopy} className='wrapper'></FontAwesomeIcon> 
        {repo.license.name}
      </div>
      : ''
    
    let updated_time 
    updated_time = 
    <div>
      {`Updated ${formatDistance(new Date(), new Date(repo.pushed_at), { addSuffix: true })} ago`}
    </div>

    return (
      <StyledRepo>
        <Container>
          <Main>
            <Title href={repo.html_url}> {repo.name} </Title>
            <Description> {repo.description} </Description>
            <Type>
              {language}
              {license}
              {updated_time}
            </Type>
          </Main>
          <Info>
            <Button theme='main'> 
              <FontAwesomeIcon icon={faStar} className='wrapper'></FontAwesomeIcon>
              Star 
            </Button>
            <Activity>
            </Activity>
          </Info>
        </Container>
        <BorderLine/>
      </StyledRepo>
    )
  case 'loading':
    return (
      <StyledRepo>
        <Loader/>
      </StyledRepo>
    )
  }
}

export default Repo