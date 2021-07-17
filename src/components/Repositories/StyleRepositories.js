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
justify-content: space-between;
margin-bottom: 15px;

.wrapper {
  margin-right: 5px;
}

@media ${device.mobileL} {
  flex-direction: column;
  
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
flex-grow: 1;

@media ${device.mobileL} {
  flex-direction: column;

  & > input {
    margin-bottom: 10px;
  }
}
`

export const SearchBar = styled.input`
flex-grow: 3;
max-width: 600px;
border: 2px solid ${border.main};
padding: 5px;
border-radius: 5px;
margin-right: 10px; 

@media ${device.mobileL} {
  margin-right: 0px; 
}
`

export const ClassifyButton = styled.div`
flex-grow: 1;
display: flex;
flex-direction: row;

.hide {
  display: none;  
}

button{
  margin-left: 5px;
  margin-right: 2px;
}

@media ${device.mobileL} {
  button{
    margin-left: 0px;
    margin-right: 3px;
  }
}

`

export const BorderLine = styled.div`
border-bottom: 1px solid ${border.main}; 
`