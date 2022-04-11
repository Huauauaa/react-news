import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BasicComponent from './basic/BasicComponent'
import styled from 'styled-components'
import { default as UseImperativeHandle } from './useImperativeHandle/Parent'
import { default as MemoDemo } from './memo/Parent'

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
      </StyledNav>
      <Routes>
        <Route path="BasicComponent" element={<BasicComponent />} />
        <Route path="MemoDemo" element={<MemoDemo />} />
        <Route path="UseImperativeHandle" element={<UseImperativeHandle />} />
      </Routes>
    </>
  )
}

export default App
