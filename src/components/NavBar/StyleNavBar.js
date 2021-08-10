import styled from 'styled-components'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

export const StyledNavBar = styled.div`
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

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 15px 30px 15px 30px;

img {
  margin-left: 19px;
}
@media ${device.mobileL} {
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 20px 10px 20px;
}
`

export const WrapperA = styled.div`
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

export const Input = styled.input`
background-color: ${color.white}20;
border: 1px solid ${border.main}c0;
border-radius: 6px;
padding: 8px 10px 8px 10px;
  
  :focus{
    outline:none
  }
`

export const A = styled.a`
color: ${color.second};
font-weight: 500;
`

export const Profile = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

@media ${device.mobileL} {
    display:none;
}
`

export const Avatar = styled.img.attrs(props => ({
  src: props.src
}))
`
border-radius: 50%;
width: 20px;
height: 20px;
`

