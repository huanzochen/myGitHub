import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCopy } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { formatDistance } from 'date-fns'

import { color, border } from '../../utils/color'
import Button from '../other/Button'
import AvatarImg from '../../img/avatar.jpg'

import {
  selectRepoById
} from './reposSlice'

const StyledRepo = styled.div`
padding: 15px;
`

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 15px;
`

const Main = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.a`
font-size: 22px;
font-weight: 500;
margin-bottom: 10px;
`
const Description = styled.div`
margin-bottom: 10px;
color: ${color.shallow_black};
width: 75%;
`

const Type = styled.div`
display: flex;
flex-direction: row;
font-size: 10px;
* {
  margin-right: 2px;
}
div {
  margin-right: 10px;
}
`

const Info = styled.div`
display: flex;
flex-direction: column;

.wrapper{
  margin-right: 5px;
}

& > button,img{
  margin-bottom: 5px;
}
`

const Activity = styled.img.attrs(props => ({
  src: AvatarImg
}))`
  width: 40px;
  height: 40px;
`

const BorderLine = styled.div`
border-bottom: 1px solid ${border.main}; 
`

const Loader = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 100px;
background: ${color.white};
z-index: 1000;

.loader {
  border: 5px solid ${border.main}; 
  border-top: 5px solid ${color.primary}; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

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
            <Button> 
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
        <Loader>
          <div className="loader"></div>
        </Loader>
      </StyledRepo>
    )
  }
}

export default Repo