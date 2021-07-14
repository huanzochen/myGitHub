import styled from 'styled-components'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

export const StyledProfile = styled.div`
`

export const Container = styled.div`
margin-top: -30px;
padding-left: 30px;
padding-right: 15px;
display: flex;
flex-direction: column;

@media ${device.mobileL} {
  margin: 0 0 0 0;
  padding: 0px 15px 0 15px;
}
`

export const WrapperUser = styled.div`
display: flex;
flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;

    * {
      margin-right: 20px;
    }
  }
`

export const Avatar = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 250px;
height: 250px;
border-radius: 50%;

@media ${device.mobileL} {
  width: 50px;
  height: 50px;
}
`

export const Name = styled.h1`
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

export const ProfileLabel = styled.div`
padding: ${props => {
    if (props.type === 'description') return '15px 6px 15px 0px'
    else if (props.type === 'achievment') return '17px 0px 30px 0px'
  }};
display: flex;
flex-direction: ${props => {
    if (props.type === 'description') return 'row'
    else if (props.type === 'achievment') return 'column'
  }};
align-items: ${props => {
    if (props.type === 'description') return 'center'
    else if (props.type === 'achievment') return 'flex-start'
  }};
.icon-wrapper {
  padding-left: 3px;
}
.text-wrapper {
  padding-left: 3px;
}
span {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.title {
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 10px;
}
`

export const BorderLine = styled.div`
border-bottom: 1px solid ${border.main}; 
`

export const Achievement = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 40px;
height: 40px;
border-radius: 50%;
`

export const Organizations = styled.img.attrs(props => ({
  src: props.src
}))
`
width: 40px;
height: 40px;
border-radius: 50%;
`
