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
import { 
  StyledProfile,
  Container,
  WrapperUser,
  Avatar,
  Name,
  ProfileLabel,
  BorderLine,
  Achievement,
  Organizations
} from './StyleProfile'
 
// Example Avatar image
// import AvatarImg from '../../img/exampleAvatar.jpg' 

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
