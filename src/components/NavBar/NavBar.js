import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons'

import { color, border } from '../../utils/color'
import DropDownIcon from '../other/DropDownIcon'
// import AvatarImg from '../../img/exampleAvatar.jpg'

import { 
  fetchUserData
} from '../Profile/userSlice'
import { 
  StyledNavBar,
  Container,
  WrapperA,
  Input,
  A,
  Profile,
  Avatar 
} from './StyleNavBar'

function NavBar() {
  const dispatch = useDispatch()
  const userDataStatus = useSelector(state => state.user.userDataStatus)
  const userData = useSelector(state => state.user.data)
  const [isClick, setIsClick] = useState(false)
  const handleClick = () => setIsClick(!isClick)

  useEffect(() => {
    function initialize() {
      if (userDataStatus === 'idle') {
        dispatch(fetchUserData())
      }
    }
    initialize()
  })


  return (
    <StyledNavBar>
      <Container>
        <div className="menu" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} className="icon medium"></FontAwesomeIcon>
        </div>
        <div className="logo">
          <FontAwesomeIcon icon={faAndroid} className="icon big"></FontAwesomeIcon>
        </div>
        <WrapperA className={isClick ? classNames({ active: true }) : classNames({ active: false })}>
          <Input></Input>
          <A>Pulls</A>
          <A>Issues</A>
          <A>Marketplace</A>
          <A>Explore</A>
        </WrapperA>
        <FontAwesomeIcon icon={faBell} className="icon"></FontAwesomeIcon>
        <Profile>
          <FontAwesomeIcon icon={faPlus} className="icon small leftspace"></FontAwesomeIcon>
          <DropDownIcon color={color.white}></DropDownIcon>
          <Avatar src={userData.avatar_url}></Avatar>
          <DropDownIcon color={color.white}></DropDownIcon>
        </Profile>
      </Container>
    </StyledNavBar>
  )
}

export default NavBar