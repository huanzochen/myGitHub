// import { useState } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { color, border, button } from '../../utils/color'

const StyledSelectMenu = styled.div`
display: flex;
flex-direction: column;
border-top: 1px solid ${border.grey};
border-left: 1px solid ${border.grey};
border-right: 1px solid ${border.grey};
border-radius: 5px;

& svg,span {
    margin: 0px 5px 0px 5px;
}

svg {
    visibility: hidden;
    &.active {
        visibility: visible;
    }
}
`

const Label = styled.label`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 100px 5px 5px;
font-size: 12px;
border-bottom: 1px solid ${border.grey};
`

function SelectMenu({
  selectType,
  types,
  onChange,
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
      <FontAwesomeIcon icon={faCheckCircle} 
        className={selectType === data ? classNames({ active: true }) : classNames({ active: false })}> </FontAwesomeIcon>
      <span>{data === 'true' ? 'All' : data}</span> 
    </Label>
  )

  return (
    <StyledSelectMenu onChange={onChange} className={className}>
      {content}
    </StyledSelectMenu>
  )    
}

export default SelectMenu