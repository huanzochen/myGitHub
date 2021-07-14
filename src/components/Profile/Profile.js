import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import { color, border } from '../../utils/color'
import Button from '../other/Button'
import { device } from '../../utils/device'

import { 
  fetchUserStarred,
  fetchUserOrganization
} from './userSlice'

// Example Avatar image
// import AvatarImg from '../../img/exampleAvatar.jpg' 

const StyledProfile = styled.div`
`

const Container = styled.div`
margin-top: -30px;
padding-left: 30px;
padding-right: 15px;
display: flex;
flex-direction: column;

@media ${device.mobileL} {
  margin: 0 0 0 0;
  padding: 0px 15px 0 15px;
}
`

const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;

    * {
      margin-right: 20px;
    }
  }
`

const Avatar = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 250px;
height: 250px;
border-radius: 50%;

@media ${device.mobileL} {
  width: 50px;
  height: 50px;
}
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
border-bottom: 1px solid ${border.main}; 
`

const Achievement = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 40px;
height: 40px;
border-radius: 50%;
`

const Organizations = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 40px;
height: 40px;
border-radius: 50%;
`

function Profile() {
  const dispatch = useDispatch()
  const userStarredStatus = useSelector(state => state.user.userStarredStatus)
  const userOrganizationStatus = useSelector(state => state.user.userOrganizationStatus)
  const userData = useSelector(state => state.user.data)
  const userStarred = useSelector(state => state.user.starred)
  const userOrganization = useSelector(state => state.user.organization)

  useEffect(() => {
    function initialize() {
      if (userStarredStatus === 'idle') {
        dispatch(fetchUserStarred())
      }
      if (userOrganizationStatus === 'idle') {
        dispatch(fetchUserOrganization())
      }
    }
    initialize()
  })

  return (
    <StyledProfile>
      <Container>
        <WrapperUser>
          <Avatar src={userData.avatar_url}></Avatar>
          <Name>
            <span className="name">{userData.name}</span>
            <span className="nickname">{userData.login}</span>
          </Name>
        </WrapperUser>
        <Button theme='main'>
          Edit Profile
        </Button>
        <ProfileLabel type="description">
          <FontAwesomeIcon icon={faUsers} className='icon-wrapper'></FontAwesomeIcon>
          <span className='text-wrapper'>{userData.followers}</span>
          <span className='text-wrapper'>followers</span>
          <span className='text-wrapper'> · </span>
          <span className='text-wrapper'>{userData.following}</span>
          <span className='text-wrapper'>following</span>
          <span className='text-wrapper'> · </span>
          <FontAwesomeIcon icon={faStar} className='icon-wrapper'></FontAwesomeIcon>
          <span className='text-wrapper'>{userStarred.length}</span>
        </ProfileLabel>
        { userData.email ? 
          <ProfileLabel type="description">
            <FontAwesomeIcon icon={faInbox} className='icon-wrapper'></FontAwesomeIcon>
            <span className='text-wrapper'>cy94295@gmail.com</span>
          </ProfileLabel> : ''
        }
        <BorderLine/>
        {/* <ProfileLabel type='achievment'>
          <span className='title'>Achievements</span>
          <Achievement src={userData.avatar_url}/>
        </ProfileLabel>
        <BorderLine/> */}
        <ProfileLabel type='achievment'>
          <span className='title'>Organizations</span>
          {
            userOrganization.map((org) => <Organizations key={org.id} src={org.avatar_url}/>)
          }
        </ProfileLabel>
      </Container>
    </StyledProfile>
  )
}

export default Profile
