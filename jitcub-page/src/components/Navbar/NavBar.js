import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'

import AvatarImg from '../../img/avatar.jpg'

const StyledNavBar = styled.div`
background-color: ${color.primary};
.icon{
  color: ${color.second};
  width: 17px;
  height: 20px;
  &.small{
    width: 13px;
    height: 15px;
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
`

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
`

const Input = styled.input.attrs(props => ({
  size: props.size || '10px'
}))`
border: 2px solid ${color.pink};
border-radius: 3px;
margin: ${props => props.size};
padding: ${props => props.size};

:focus{
outline:none
}
`

const A = styled.a`
color: ${color.second};
font-weight:500;
margin: 0.3em;
padding: 0.3em;
`

const Profile = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`
const DropDown = styled.div`
margin-left: 5px;
margin-top: 3px;
border-top: 5px solid ${color.second};
border-right: 5px solid transparent;
border-left: 5px solid transparent;
`

const Avatar = styled.img.attrs(props => ({
  src: AvatarImg
}))`
margin-left: 19px;
border-radius: 50%;
width:20px;
height:20px;
`


function NavBar() {
  return (
    <StyledNavBar>
      <Container>
        <FontAwesomeIcon icon={faAndroid} className="icon big leftspace rightspace"></FontAwesomeIcon>
        <Input></Input>
        <A>Pulls</A>
        <A>Issues</A>
        <A>Marketplace</A>
        <A>Explore</A>
        <Profile>
          <FontAwesomeIcon icon={faBell} className="icon leftspace"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faPlus} className="icon small leftspace"></FontAwesomeIcon>
          <DropDown></DropDown>
          <Avatar></Avatar>
          <DropDown></DropDown>
        </Profile>
      </Container>
    </StyledNavBar>
  )
}

export default NavBar