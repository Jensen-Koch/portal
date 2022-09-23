import React from 'react'
import '../../styles/CriticalBusinessFunctions/criticalBusinessFunctions.css'
import { Link, Outlet } from 'react-router-dom'

const CriticalBusinessFunctions = () => {
  return (
    <div className="critical-business-functions">
      <h1 className="title">NOC Mastermind Critical Business Functions Dashboard</h1>
      <div className="critical-business-functions-links">
        <Link className="link" to="/criticalBusinessFunctions/cbf">Critical Business Functions</Link>
        <Link className="link" to="/criticalBusinessFunctions/login">Login</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default CriticalBusinessFunctions
