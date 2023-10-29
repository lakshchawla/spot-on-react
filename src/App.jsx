import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'




import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
