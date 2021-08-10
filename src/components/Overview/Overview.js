import { Redirect, Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../other/Button'

import {
  StyledOverview,
  Container,
  Portfolio,
  Information,
  Avatar,
  Title,
  Discription,
  SubTitle
} from './StyleOverview'

import AvatarImg from '../../img/exampleAvatar.jpg'

const PortfolioDatas = [
  {
    name: 'ziquanh19-github',
    url: 'https://ziquanh19-github.herokuapp.com/',
    discription: 'About me and my repos using github API.',
    subject: ['css', 'javasript']
  },
  { 
    name: 'login-page-flex',
    url: 'https://login-page-flex.herokuapp.com/',
    discription: 'A login mockup page used built with flex css.',
    subject: ['css']
  },
  { 
    name: 'js-playground',
    url: 'https://github.com/huanzochen/js_playground.git/',
    discription: 'A playground for practicing js.',
    subject: ['js']
  }
]

let content 
content = PortfolioDatas.map((data) => {
  return (
    <Portfolio key={data.name}>
      <Information>
        <Link to={{ pathname: data.url }} target="_blank" >
          <Button theme="url"> View </Button>
        </Link>
        <Avatar src={AvatarImg}></Avatar>
      </Information>

      <Title> {data.name} </Title>
      <Discription> {data.discription} </Discription>
      <SubTitle>
        {(() => {
          return data.subject.map((skill, index) => {
            if (index === data.subject.length - 1) return <span key={skill}> {skill} </span>
            else {
              return <span key={skill}> {skill} | </span>
            }
          })
        })()}
      </SubTitle> 
    </Portfolio>
  )
})

function Overview() {
  return (
    <StyledOverview>
      <Container>
        {content}
      </Container>
    </StyledOverview>
  )
}

export default Overview