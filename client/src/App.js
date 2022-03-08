import React, {useState, useEffect} from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard/:userId' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App

