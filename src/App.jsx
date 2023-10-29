import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Sales from './pages/Sales'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sales" element={<Sales/>} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App
