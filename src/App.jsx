import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Property from './property/Property'
import About from './About/About'
import Swips from './Swip/swips'
import Flip from './flip/Flip'

function App() {
 

  return (
    <>
      <Navbar/>
      <Home/>
      <Property/>
      <About/>
      <Swips/>
      <Flip/>
    </>
  )
}

export default App
