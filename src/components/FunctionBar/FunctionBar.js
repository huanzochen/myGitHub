import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

import {
  StyledFunctionBar,
  Container,
  FunctionButton
} from './StyleFunctionBar'

function FunctionBar({
  StyledFunctionBarClassName,
  ContainerClassName
}) {

  const refOverviewButtonHref = useRef(null)
  const refRepositoriesButtonHref = useRef(null)
  useEffect(() => {
    if (refOverviewButtonHref && refOverviewButtonHref.current) {
      const handleOverviewButton = () => {
        window.location.href = '/'
      }
      refOverviewButtonHref.current.addEventListener('click', handleOverviewButton)
      return () => {
        refOverviewButtonHref.current.removeEventListener('click', handleOverviewButton)
      }
    }
  })
  useEffect(() => {
    if (refRepositoriesButtonHref && refRepositoriesButtonHref.current) {
      const handleRepositoriesButton = () => {
        window.location.href = '/repositories'
      }
      refRepositoriesButtonHref.current.addEventListener('click', handleRepositoriesButton)
      return () => {
        refRepositoriesButtonHref.current.removeEventListener('click', handleRepositoriesButton)
      }
    }
  })

  return (
    <StyledFunctionBar className={StyledFunctionBarClassName}>
      <Container className={ContainerClassName}>
        <FunctionButton ref={refOverviewButtonHref}>
          <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
          <p className='wrapper'>Overview</p>
        </FunctionButton>
        <FunctionButton ref={refRepositoriesButtonHref} selected={true}>
          <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
          <p className='wrapper'>Repositories</p>
        </FunctionButton>
        {/* <FunctionButton>
          <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
          <p className='wrapper'>Projects</p>
        </FunctionButton>
        <FunctionButton>
          <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>
          <p className='wrapper'>Package</p>
        </FunctionButton> */}

      </Container>
    </StyledFunctionBar>
  )
}

export default FunctionBar