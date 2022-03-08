import React, {useState, useEffect} from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';

const App = () => {

  
  return (
  
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard/:userId' element={<Dashboard/>}/>
      </Routes>
    
  )
}

export default App

