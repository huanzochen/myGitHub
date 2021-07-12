import styled from 'styled-components'
import { useState } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faPlus, faHamburger } from '@fortawesome/free-solid-svg-icons'

import { color, border } from '../../utils/color'
import DropDownIcon from '../other/DropDownIcon'
import AvatarImg from '../../img/avatar.jpg'
import { device } from '../../utils/device'

const StyledNavBar = styled.div`
background-color: ${color.primary};
.menu {
  display: none;
}
.logo {
  margin-right: 9px;
}
.icon{
  color: ${color.second};
  width: 17px;
  height: 20px;
  &.small{
    width: 13px;
    height: 15px;
  }
  &.medium {
    width: 25px;
    height: 25px;
  }
  &.big{
    width: 35px;
    height: 35px;
  }
  &.leftspace{
    margin-left: 19px;
  }
  &.rightspace{
    margin-right: 9px;
  }
}

@media ${device.mobileL} {
  .menu {
    display:block;
  }
  .logo {
    margin-right: 0px;
  }
}
`

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 20px 30px 20px 30px;
img {
  margin-left: 19px;
}

@media ${device.mobileL} {
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 20px 10px 20px;
}
`

const WrapperA = styled.div`
width: 100%;

input,a {
  margin: 0px 10px 0px 10px;
}

@media ${device.mobileL} {
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
    order:2;
  } 

  input {
    margin: 10px 10px 10px 10px;
  }
  a {
    padding: 10px 10px 10px 0px;
    border-bottom: 1px solid ${border.main}; 
  }


}
`

const Input = styled.input.attrs(props => ({
  size: props.size || '10px'
}))
`
border: 2px solid ${color.pink};
border-radius: 8px;
padding: ${props => props.size};

:focus{
  outline:none
}
`

const A = styled.a`
color: ${color.second};
font-weight: 500;
`

const Profile = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

@media ${device.mobileL} {
    display:none;
}
`

const Avatar = styled.img.attrs(props => ({
  src: AvatarImg
}))
`
border-radius: 50%;
width: 20px;
height: 20px;
`



function NavBar() {
  const [isClick, setIsClick] = useState(false)

  const handleClick = () => setIsClick(!isClick)

  return (
    <StyledNavBar>
      <Container>
        <div className="menu" onClick={handleClick}>
          <FontAwesomeIcon icon={faHamburger} className="icon medium"></FontAwesomeIcon>
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
          <Avatar></Avatar>
          <DropDownIcon color={color.white}></DropDownIcon>
        </Profile>
      </Container>
    </StyledNavBar>
  )
}

export default NavBar