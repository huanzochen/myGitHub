import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { color } from '../../utils/color'
import Button from '../other/Button'
import AvatarImg from '../../img/avatar.jpg'

const StyledRepoList = styled.div`
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
`

const Type = styled.div`
display: flex;
flex-direction: row;
font-size: 10px;
*{
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
border-bottom: 1px solid ${color.border}; 
`


function RepoList () {
  return (
    <StyledRepoList>
      <Container>
        <Main>
          <Title> JitCub-page </Title>
          <Description> a page that can list your repos using github API </Description>
          <Type>
            <div> Javascript </div>
            <div> License </div>
            <div> updated time </div>
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
    </StyledRepoList>
  )
}

export default RepoList