import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
padding: 20%;
background-color: darkred;
`

function Overview() {

  return (
    <StyledOverview>
      <Containter>
        <Portfolio>




        </Portfolio>
        
        <Portfolio></Portfolio>
        <Portfolio></Portfolio>
        <Portfolio></Portfolio>
            
      </Containter>
    </StyledOverview>
  )

}

export default Overview