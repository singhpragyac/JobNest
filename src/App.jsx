import { useState } from 'react'
import Header from './components/Layout/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/auth/login.jsx'
import {Routes, Route} from "react-router-dom";
import Register from './components/auth/register.jsx';

function App() {

  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
