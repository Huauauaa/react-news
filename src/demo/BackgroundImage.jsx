import React from 'react'
import styled from 'styled-components'
import circle from '../assets/circle.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #582dcd;
  background-image: url(${circle}), url(${circle}), url(${circle}),
    url(${circle}), url(${circle});
  background-size: 20px;
  background-position: left 0% top 0%, top 0% right 0%, bottom 0% right 0%,
    bottom 0% left 0%, top 50% left 50%;
  background-repeat: no-repeat;
  border-radius: 10px;
`

function BackgroundImage() {
  return <Wrapper></Wrapper>
}

export default BackgroundImage
