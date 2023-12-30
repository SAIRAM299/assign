import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Property from './property/Property'
import About from './About/About'
import Swips from './Swip/swips'

function App() {
 

  return (
    <>
      <Navbar/>
      <Home/>
      <Property/>
      <About/>
      <Swips/>
    </>
  )
}

export default App
