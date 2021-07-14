import styled from 'styled-components'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'
import AvatarImg from '../../img/exampleAvatar.jpg'

export const StyledRepo = styled.div`
padding: 15px;
`

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: 15px;
`

export const Main = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.a`
font-size: 22px;
font-weight: 500;
margin-bottom: 10px;
word-break: break-all;
`
export const Description = styled.div`
margin-bottom: 10px;
color: ${color.shallow_black};
width: 75%;
`

export const Type = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 10px;
* {
  margin-right: 2px;
}
div {
  margin-right: 10px;
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;

.wrapper{
  margin-right: 5px;
}

& > button,img{
  margin-bottom: 5px;
}
`

export const Activity = styled.img.attrs(props => ({
  src: AvatarImg
}))
`
width: 40px;
height: 40px;

  @media ${device.mobileL} {
    display: none;
  }
`

export const BorderLine = styled.div`
border-bottom: 1px solid ${border.main}; 
`
