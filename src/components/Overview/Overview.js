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
& > div {
  
};
padding: 10px;
background-color: darkgreen;
`

const Portfolio = styled.div`
padding: 100px;
background-color: darkred;
`

function Overview() {

  return (
    <StyledOverview>
      <Containter>
        <Portfolio></Portfolio>
            
      </Containter>
    </StyledOverview>
  )

}

export default Overview