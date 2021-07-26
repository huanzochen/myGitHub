import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../other/Button'
import { color, border } from '../../utils/color'
import { device } from '../../utils/device'

const StyledOverview = styled.div`
`

const Containter = styled.div`
display:flex;
justify-content: space-between;
flex-wrap: wrap;
& > div {
  margin: 25px;
};
background-color: ${color.main};
`

const Portfolio = styled.div`
display: flex;
flex-direction: column;
align-items: center;

/* background-color: darkred; */
border-radius: 10px;
border: 1px solid ${border.grey};
`

const Title = styled.div`
padding: 50px;
`

// const Url = styled.div`

// `

const PortfolioDatas = [
  {
    name: 'ziquanh19-github',
    url: 'https://ziquanh19-github.herokuapp.com/'
  },
  { 
    name: 'login-page-flex',
    url: 'https://login-page-flex.herokuapp.com/'
  }
]


let content 

content = PortfolioDatas.map((data) => {
  return (
    <Portfolio>
      <Title> {data.name} </Title> 
      <Link to={{ pathname: data.url }} target="_blank" >
        <Button theme="url"> View </Button>
      </Link>
    </Portfolio>
  )
})

function Overview() {

  return (
    <StyledOverview>
      <Containter>
        {content}
        {/* <Portfolio>
          <Title> {PortfolioDatas[0].name} </Title> 
          <Button theme="url"> View </Button>

        </Portfolio>
        
        <Portfolio></Portfolio>
        <Portfolio></Portfolio>
        <Portfolio></Portfolio> */}
            
      </Containter>
    </StyledOverview>
  )

}

export default Overview