import styled from 'styled-components'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

export const StyledRepositories = styled.div`
width: 75%;

.mobile {
  display: none;
}

@media ${device.mobileL} {
width: 100%;
  .mobile {
    display: block;
    overflow-x: auto;
    .container {
      justify-content: flex-start;
    }
  }
}
`

export const Container = styled.div`
`

export const WrapperTopContainer = styled.div`
padding: 15px;
`

export const WrapperTop = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
margin-bottom: 15px;

.wrapper {
  margin-right: 5px;
}

@media ${device.mobileL} {
  flex-direction: column;
  align-items: stretch;

  .newbutton {
    order:-1;
  }

  & > button {
    margin-bottom: 25px;
  }
}
`

export const Bar = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width:100%;
flex-wrap: wrap;

@media ${device.mobileL} {
  flex-direction: column;

  & > input {
    margin-bottom: 10px;
  }
}
`

export const SearchBar = styled.input`
width: 100%;
max-width: 500px;
border: 2px solid ${border.main};
padding: 6px;
border-radius: 5px;
margin-right: 10px; 

@media ${device.mobileL} {
  margin-right: 0px; 
}
`

export const ClassifyButton = styled.div`
display: flex;
flex-direction: row;

.hide {
  display: none;  
}
`

export const WrapperMenu = styled.div`
@media ${device.desktop} {
  margin: 0px 4px 0px 0px;
}
@media ${device.laptop} {
  margin: 4px 4px 0px 0px;
}
`

export const SelectMenuModal = styled.div`
position: absolute;
z-index: 99;
background-color: ${color.white};
`

export const BorderLine = styled.div`
border-bottom: 1px solid ${border.main}; 
`