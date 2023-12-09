import React from 'react'
import { Routes, Route } from "react-router-dom"
import Form from './Components/Form'
import ChristmasFrd from './Components/ChristmasFrd'
function App() {
  return (

      <Routes>
        <Route path='/' element={<ChristmasFrd />} />
        <Route path="/add" element={<Form />} />
      </Routes>
   
  )
}

export default App