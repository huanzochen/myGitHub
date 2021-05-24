import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { color } from '../../utils/color'
import Button from '../other/Button'
import AvatarImg from '../../img/avatar.jpg'


const StyledProfile = styled.div`
`

const Container = styled.div`
margin-top: -30px;
padding-left: 30px;
padding-right: 15px;
display: flex;
flex-direction: column;

.button-wrapper{
  width: 100%;
}
`

const Avatar = styled.img.attrs(props => ({
  src: AvatarImg
}))`
width: 250px;
height: 250px;
border-radius: 50%;
`

const Name = styled.h1`
display: flex;
flex-direction: column;
.name{
  font-size: 30px;
  font-weight: 600;
}
.nickname{
  font-size: 22px;
  font-weight: 300;  
}
`

const ProfileLabel = styled.div`
padding: ${props => {
    if (props.type === 'description') return '15px 6px 15px 0px'
    else if (props.type === 'achievment') return '17px 0px 30px 0px'
  }};
display: flex;
flex-direction: ${props => {
    if (props.type === 'description') return 'row'
    else if (props.type === 'achievment') return 'column'
  }};
align-items: ${props => {
    if (props.type === 'description') return 'center'
    else if (props.type === 'achievment') return 'flex-start'
  }};
.icon-wrapper {
  padding-left: 3px;
}
.text-wrapper {
  padding-left: 3px;
}
span {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.title {
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 10px;
}
`

const BorderLine = styled.div`
border-bottom: 1px solid ${color.border}; 
`

const Achievement = styled.img.attrs(props => ({
  src: AvatarImg
}))`
width: 40px;
height: 40px;
border-radius: 50%;
`

const Organizations = styled.img.attrs(props => ({
  src: AvatarImg
}))`
width: 40px;
height: 40px;
border-radius: 50%;
`


function Profile() {
  return (
    <StyledProfile>
      <Container>
        <Avatar></Avatar>
        <Name>
          <span className="name">huanzo86</span>
          <span className="nickname">huanzochen</span>
        </Name>
        <Button theme='main'>
          <div className='button-wrapper'>Edit Profile</div>
        </Button>
        <ProfileLabel type="description">
          <FontAwesomeIcon icon={faUsers} className='icon-wrapper'></FontAwesomeIcon>
          <span className='text-wrapper'>14</span>
          <span className='text-wrapper'>followers</span>
          <span className='text-wrapper'> · </span>
          <span className='text-wrapper'>14</span>
          <span className='text-wrapper'>following</span>
          <span className='text-wrapper'> · </span>
          <FontAwesomeIcon icon={faStar} className='icon-wrapper'></FontAwesomeIcon>
          <span className='text-wrapper'>35</span>
        </ProfileLabel>
        <ProfileLabel type="description">
          <FontAwesomeIcon icon={faInbox} className='icon-wrapper'></FontAwesomeIcon>
          <span className='text-wrapper'>cy94295@gmail.com</span>
        </ProfileLabel>

        <BorderLine/>
        <ProfileLabel type='achievment'>
          <span className='title'>Achievements</span>
          <Achievement/>
        </ProfileLabel>
        <BorderLine/>
        <ProfileLabel type='achievment'>
          <span className='title'>Organizations</span>
          <Organizations/>
        </ProfileLabel>
      </Container>

    </StyledProfile>
  )
}


export default Profile
