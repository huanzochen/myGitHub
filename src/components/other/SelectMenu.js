// import { useState } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { color, border, button } from '../../utils/color'

const StyledSelectMenu = styled.div`
display: flex;
flex-direction: column;
border-top: 1px solid ${border.main};
border-left: 1px solid ${border.main};
border-right: 1px solid ${border.main};
border-radius: 5px;
font-size: 12px;

& svg,span {
  margin: 0px 5px 0px 5px;
}
& svg {
  font-size: 16px;
  color: ${color.shallow_black};
}

`

const Header = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
padding: 5px;
font-weight: 600;
`

const Label = styled.label`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 130px 5px 5px;
border-bottom: 1px solid ${border.main};

& svg {
    visibility: hidden;
    &.active {
        visibility: visible;
    }
}
`

function SelectMenu({
  discription,
  selectType,
  types,
  onChange,
  onClose,
  className
}) {
  // const [checkData, setCheckData] = useState('true')
  // const onChange = (event) => {
  //   setCheckData(event.target.value)
  // }
  // const types = ['true', 'Javascript', 'Shell', 'Python', 'Powershell', 'HTML', 'CSS']

  let content
  content = types.map((data) => 
    <Label key={data} aria-checked={selectType === data ? true : false}> 
      <input type="radio" name="language" value={data} hidden="hidden"></input>
      <FontAwesomeIcon icon={faCheck} 
        className={selectType === data ? classNames({ active: true }) : classNames({ active: false })}> </FontAwesomeIcon>
      <span>{data === 'true' ? 'All' : data}</span> 
    </Label>
  )

  return (
    <StyledSelectMenu onChange={onChange} className={className}>
      <Header>
        <span> {discription} </span>
        <FontAwesomeIcon icon={faTimes} onClick={onClose} ></FontAwesomeIcon>
      </Header>
      {content}
    </StyledSelectMenu>
  )    
}

export default SelectMenu