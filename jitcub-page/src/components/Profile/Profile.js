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

`
const NickName = styled.h2`
`


function Profile() {
  return (
    <StyledProfile>
      <Container>
        <Avatar></Avatar>
        <Name>
          <span></span>
        </Name>

      </Container>

    </StyledProfile>
  )
}


export default Profile
