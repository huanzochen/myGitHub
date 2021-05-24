import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../../utils/color'

const StyledButton = styled.button.attrs(props => ({
  type: 'button'
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 16px;
    font-size: 13px;
    font-weight: 600;
    font-family: system-ui;
    border-radius: 5px;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    
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

    background: ${props => {
    switch (props.theme) {
    case 'main':
      return `radial-gradient(${color.button}e0, ${color.button}e9, ${color.button} )`
    case 'new': 
      return `radial-gradient(${color.add}e0 , ${color.add}e9 , ${color.add} )`
    default:
      return '1.5px solid black' 
    }
  }};

    border: ${props => {
    switch (props.theme) {
    case 'main':
      return `1.5px solid ${color.border_grey}`
    case 'new':
      return `1.5px solid ${color.border_green}`
    default:
      return `1.5px solid ${color.border_grey}`
    }
  }};

  box-shadow: 0px 1px ${color.border}aa;

`

function Button (props) {
  return (
    <StyledButton theme={`${props.theme}`}>
      {props.children}
    </StyledButton>
  )
}

export default Button