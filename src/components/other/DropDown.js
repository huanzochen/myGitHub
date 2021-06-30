import styled from 'styled-components'
import { color } from '../../utils/color'

const StyledDropDown = styled.div`
margin-left: 5px;
margin-top: 3px;
border-top: 5px solid ${props => props.color ? props.color : color.primary};
border-right: 5px solid transparent;
border-left: 5px solid transparent;
`

function DropDown(props) { 
  return (
    <StyledDropDown color={props.color}></StyledDropDown>
  )
}

export default DropDown