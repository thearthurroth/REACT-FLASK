import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const Overview = () => {
    let { userId } = useParams()
    const navigate = useNavigate()
  return (
    <div>
        <h1>Overview</h1>
        <button onClick={() =>{
            let link= '/dashboard/projects/'+ userId;
            navigate(link)}}> Projects</button>
    </div>
  )
}

export default Overview