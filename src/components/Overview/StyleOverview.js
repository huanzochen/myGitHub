import styled from 'styled-components'

import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

export const StyledOverview = styled.div`
a {
    text-decoration: none;
}
`

export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
flex-wrap: wrap;
& > div {
  margin: 25px;
};
background-color: ${color.main};
`

export const Portfolio = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;

border-radius: 10px;
border: 1px solid ${border.primary}40;
`

export const Information = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

export const Avatar = styled.img.attrs(props => ({
  src: props.src
}))
`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`

export const Title = styled.div`
color: ${color.primary};
font-size: 25px;
font-weight: 600;
padding: 50px 10px 5px 10px;
`

export const Discription = styled.div`
padding: 5px 10px 5px 10px;
& span {
    font-size: 20px;
    color: ${color.primary}d0;
    margin-right: 5px;
}
`

export const SubTitle = styled.div`
padding: 5px 10px 5px 10px;
& span {
    font-size: 20px;
    color: ${color.primary}d0;
    margin-right: 5px;
}

`

// const Url = styled.div`

// `