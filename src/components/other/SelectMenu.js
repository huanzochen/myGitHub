import { useState } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { color, border, button } from '../../utils/color'

const StyledSelectMenu = styled.div`
display: flex;
flex-direction: column;

svg {
    visibility: hidden;
    &.active {
        visibility: visible;
    }
}

`

const Label = styled.label`

border-bottom: 1px solid ${border.grey}

`




function SelectMenu() {
  
  const [checkData, setCheckData] = useState(true)

  const onChange = (event) => {
    console.log(event.target.value)
    setCheckData(event.target.value)
  }

  const type = ['All', 'Javascript', 'Shell', 'Python', 'Powershell', 'HTML', 'CSS']
  
  let content

  content = type.map((data) => 
    <Label key={data} aria-checked={checkData === data ? true : false}> 
      <input type="radio" name="language" value={data} hidden="hidden"></input>
      <FontAwesomeIcon icon={faCheckCircle} 
        className={checkData === data ? classNames({ active: true }) : classNames({ active: false })}> </FontAwesomeIcon>
      <span>{data}</span> 
    </Label>
  )

  return (
    <StyledSelectMenu onChange={onChange}>
      {content}
    </StyledSelectMenu>
  )    
}

export default SelectMenu