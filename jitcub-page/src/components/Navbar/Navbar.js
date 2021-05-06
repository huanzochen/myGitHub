import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { color } from '../../utils/color'

import Avatarimg from '../../img/avatar.jpg'

const StyledNavbar = styled.div`
background-color: ${color.primary};
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
margin: 0.5em;
padding: 0.5em;
`

const Profile = styled.div`
display:flex;
flex-direction: row;
align-items: center;
.icon{
  color: ${color.second};
  margin-left: 19px;
  width: 17px;
  height: 20px;
  &.small{
    width: 13px;
    height: 15px;
  }
}
`
const DropDown = styled.div`
margin-left: 5px;
margin-top: 3px;
border-top: 5px solid ${color.second};
border-right: 5px solid transparent;
border-left: 5px solid transparent;
`

const Avatar = styled.img.attrs(props => ({
  src: Avatarimg
}))`
margin-left: 19px;
border-radius: 50%;
width:20px;
height:20px;
`


function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <FontAwesomeIcon icon={faAndroid} />
        <Input></Input>
        <A>Pull requests</A>
        <A>Issues</A>
        <A>MarketPlace</A>
        <A>Explore</A>
        <Profile>
          <FontAwesomeIcon icon={faBell} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faPlus} className="icon small"></FontAwesomeIcon>
          <DropDown></DropDown>
          <Avatar></Avatar>
          <DropDown></DropDown>
        </Profile>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar