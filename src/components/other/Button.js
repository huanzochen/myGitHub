import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color, border, button } from '../../utils/color'

const StyledButton = styled.button.attrs(props => ({
  type: 'button'
}))
`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    font-size: 13px;
    font-weight: 700;
    font-family: system-ui;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    color: ${props => {
    switch (props.theme) {
    case 'main':
      return 'inherit'
    case 'url':
      return `${color.third}c8`
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
    case 'url': 
      return `${button.dark}10`
    case 'new': 
      return `radial-gradient(${button.add}e0 , ${button.add}e9 , ${button.add} )`
    default:
      return '1.5px solid black' 
    }
  }};

    border: ${props => {
    switch (props.theme) {
    case 'main':
      return `1.5px solid ${border.grey}`
    case 'url': 
      return `1.5px solid ${border.grey}`
    case 'new':
      return `1.5px solid ${border.green}`
    default:
      return `1.5px solid ${border.grey}`
    }
  }};

  border-radius: ${props => {
    switch (props.theme) {
    case 'main':
      return '5px'
    case 'new':
      return '5px'
    case 'url':
      return '20px'
    }
  }};

  box-shadow: ${props => {
    switch (props.theme) {
    case 'url':
      return 'none'
    default:
      return `0px 1px ${border.main}aa`
    }
  }};

&:hover{
  cursor: pointer;
  background:${button.dark}20;
}

`

function Button ({
  theme,
  children,
  className,
  onClick
}) {
  return (
    <StyledButton theme={`${theme}`} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button