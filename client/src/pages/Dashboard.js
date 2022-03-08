import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import './Dashboard.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Overview from './Overview'
import ProjectPage from './ProjectPage'

const Dashboard = () => {
    let { userId } = useParams()

  return (
    <>
        <NavBar/>
        <div className='Dashboard'>
            <Routes>
                <Route path='/dashboard/projects/:userId' element={<ProjectPage/>}/>
                <Route path='/dashboard/:userId' element={<Overview/>}/>
            </Routes>
            <Overview/>
        </div>
        
    </>
  )
}

export default Dashboard