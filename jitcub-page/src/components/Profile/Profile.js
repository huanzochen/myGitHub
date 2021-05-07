import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../../utils/color'

import AvatarImg from '../../img/avatar.jpg'


const StyledProfile = styled.div`

`

const Container = styled.div`
margin-top: -30px;
padding-left: 30px;
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
width: 25%; // 等到右邊的 elements 出來後就可以用 flex 並調整到 100%
height: 30px;
font-weight: 700;
font-family: system-ui;
border: 2px solid ${color.border};
border-radius: 5px;
background: ${color.button};
text-decoration: none;
margin: 0;


-webkit-appearance: none;
-moz-appearance: none;
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


      </Container>

    </StyledProfile>
  )
}


export default Profile
