import React from 'react'
import { TypedText, VerticalText } from '../components/styles/Text.styled'
import { ColorInput } from '../components/styles/Input.styled'
import BackgroundImage from './BackgroundImage'
import { GridDIV } from '../components/styles/DIV.styled'

function HTMLCSSDemo() {
  return (
    <fieldset>
      <legend>HTML CSS</legend>
      <VerticalText>Hello world</VerticalText>
      <GridDIV>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </GridDIV>
      <ColorInput caretColor="red"></ColorInput>
      <TypedText>Typing effect for text</TypedText>
      <BackgroundImage></BackgroundImage>
    </fieldset>
  )
}

export default HTMLCSSDemo
