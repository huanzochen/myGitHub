import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../utils/color'

const StyledButton = styled.button.attrs(props => ({
  type: 'button'
}))`
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 600;
    font-family: system-ui;
    border-radius: 5px;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    /* width: ${props => {
    switch (props.theme) {
    case 'main': return '100%'
    case 'new': return '10%'
    default: return '100%'
    }
  }}; */

    color: ${props => {
    switch (props.theme) {
    case 'main':
      return 'inherit'
    case 'new':
      return `${color.second}`
    default:
      return '1.5px solid black' 
    }
  }};

    background-color: ${props => {
    switch (props.theme) {
    case 'main':
      return `${color.button}`
    case 'new':
      return `${color.add}`
    default:
      return '1.5px solid black' 
    }
  }};

    border: ${props => {
    switch (props.theme) {
    case 'main':
      return `1.5px solid ${color.border_dark}`
    case 'new':
      return `1.5px solid ${color.border_green}`
    default:
      return '1.5px solid black' 
    }
  }};

`

function Button (props) {
  return (
    <StyledButton theme={`${props.theme}`}>
      {props.children}
    </StyledButton>
  )
}

export default Button