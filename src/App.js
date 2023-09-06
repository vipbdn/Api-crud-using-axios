import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import EmpList from './Components/EmpList'
import Add from './Components/Add'
import Edit from './Components/Edit'
  

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<EmpList/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>

        </Routes>
      </Router>

    </div>
  )
}

export default App
