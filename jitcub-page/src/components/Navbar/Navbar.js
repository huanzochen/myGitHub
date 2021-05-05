import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { color } from '../../utils/color'

const StyledNavbar = styled.div`
background-color: ${color.main};
height: 10vh;
`

const Container = styled.div`
padding: 10px;
`

const Input = styled.input.attrs(props => ({
  size: props.size || '1vh'
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
margin: 0.5vh;
padding: 0.5vh;
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
      </Container>
    </StyledNavbar>
  )
}

export default Navbar