import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { color } from '../../utils/color'

import AvatarImg from '../../img/avatar.jpg'


const StyledProfile = styled.div`

`

const Container = styled.div`
margin-top: -30px;
padding-left: 30px;
display:flex;
flex-direction:column;
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

const Button = styled.button.attrs(props => ({
  type: 'button'
}))`
height: 30px;
font-weight: 700;
font-family: system-ui;
border: 1.5px solid ${color.border_dark};
border-radius: 5px;
background: ${color.button};
text-decoration: none;
margin: 0;
-webkit-appearance: none;
-moz-appearance: none;
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
.font-wrapper {
  padding-right:2px;
}
.wrapper {
  padding-left:2px;
  padding-right:2px;
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
        <Button>Edit Profile</Button>
        <ProfileLabel type="description">
          <FontAwesomeIcon icon={faUsers} className='font-wrapper'></FontAwesomeIcon>
          <span className='wrapper'>14</span>
          <span>followers</span>
          <span> · </span>
          <span className='wrapper'>14</span>
          <span>following</span>
          <span> · </span>
          <FontAwesomeIcon icon={faStar} className='font-wrapper'></FontAwesomeIcon>
          <span className='wrapper'>35</span>
        </ProfileLabel>
        <ProfileLabel type="description">
          <FontAwesomeIcon icon={faInbox} className='font-wrapper'></FontAwesomeIcon>
          <span className='wrapper'>cy94295@gmail.com</span>
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
