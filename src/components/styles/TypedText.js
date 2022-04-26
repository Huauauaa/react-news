import styledComponents, { keyframes } from 'styled-components'

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

export const TypedText = styledComponents.div`
width: 22ch;
white-space: nowrap;
overflow: hidden;
border-right: 3px solid;
font-family: monospace;
animation: ${typing} 2s steps(22), ${effect} .5s step-end infinite alternate;
`
