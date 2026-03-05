import React from 'react'
import {Route, Routes} from "react-router"
import Home from './pages/Home'
import Details from './pages/details'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='muvie/:id' element={<Details/>}/>
    </Routes>
  )
}
