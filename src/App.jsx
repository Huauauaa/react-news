import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BasicComponent from './basic/BasicComponent'
import styled from 'styled-components'
import { default as UseImperativeHandle } from './useImperativeHandle/Parent'
import { default as MemoDemo } from './memo/Parent'
import HTMLCSSDemo from './demo/HTMLCSSDemo'
import NeumorphismDemo from './pages/NeumorphismDemo'
import PedroPage from './pedro/PedroPage'

const StyledNav = styled('nav')`
  width: 100%;
  display: flex;
  gap: 10px;
`
function App() {
  return (
    <>
      <StyledNav>
        <Link to="/BasicComponent">BasicComponent</Link>
        <Link to="/MemoDemo">MemoDemo</Link>
        <Link to="/UseImperativeHandle">UseImperativeHandle</Link>
        <Link to="/html-css">html css</Link>
        <Link to="/Neumorphism">玻璃拟态</Link>
        <Link to="/pedro">pedro</Link>
      </StyledNav>
      <Routes>
        <Route path="BasicComponent" element={<BasicComponent />} />
        <Route path="MemoDemo" element={<MemoDemo />} />
        <Route path="UseImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/html-css" element={<HTMLCSSDemo />} />
        <Route path="/Neumorphism" element={<NeumorphismDemo />} />
        <Route path="/pedro" element={<PedroPage />} />
      </Routes>
    </>
  )
}

export default App
