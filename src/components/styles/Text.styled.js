import styled, { keyframes } from 'styled-components'

const typing = keyframes`
  from {
    width: 0;
  }
`

const effect = keyframes`
  50% {
    border-color: transparent;
  }
`

export const TypedText = styled.div`
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  animation: ${typing} 2s steps(22), ${effect} 0.5s step-end infinite alternate;
`

export const VerticalText = styled.div`
  writing-mode: vertical-lr;
`
