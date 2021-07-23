import styled from 'styled-components'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

export const StyledFunctionBar = styled.div`
border-bottom: 1px solid ${border.main};
`
export const Container = styled.div`
display:flex;

& a{
  text-decoration: none;
  color: ${color.black};
}
`

export const FunctionButton = styled.div`
display: flex;
align-items: center;
font-weight: 600;
padding: 16px 15px 16px 15px;
border-bottom: 2px solid ${props => {
  // 如果遇到選擇的標籤就用 important 強制設定顏色,暫時想不到更好的解法
    if (props.selected) return color.pink + ' !important'
    else { return 'transparent' }
  }}; 
& > span{
margin-left:10px;
}
&:hover{
  border-bottom: 2px solid ${border.main};
}
`