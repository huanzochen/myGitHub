import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color, border, button } from '../../utils/color'

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
      return `radial-gradient(${button.main}e0, ${button.main}e9, ${button.main} )`
    case 'new': 
      return `radial-gradient(${color.add}e0 , ${color.add}e9 , ${color.add} )`
    default:
      return '1.5px solid black' 
    }
  }};

    border: ${props => {
    switch (props.theme) {
    case 'main':
      return `1.5px solid ${border.grey}`
    case 'new':
      return `1.5px solid ${border.green}`
    default:
      return `1.5px solid ${border.grey}`
    }
  }};

  box-shadow: 0px 1px ${border.main}aa;

`

function Button (props) {
  return (
    <StyledButton theme={`${props.theme}`}>
      {props.children}
    </StyledButton>
  )
}

export default Button