import React from 'react'
import '../../styles/Performance/performance.css'
import { Link, Outlet } from 'react-router-dom'

const Performance = () => {
  return (
    <div className="performance">
      <h1 className="title">NOC Mastermind Performance Dashboard</h1>
      <div className="performance-links">
        <Link className="link" to="/performance/loadPlanning">Load Planning</Link>
        <Link className="link" to="/performance/loadExecution">Load Execution</Link>
        <Link className="link" to="/performance/procurement">Procurement</Link>
        <Link className="link" to="/performance/booking">Booking</Link>
        <Link className="link" to="/performance/recordManagement">Record Management</Link>
        <Link className="link" to="/performance/sharedServices">Shared Services</Link>
        <Link className="link" to="/performance/accounting">Accounting</Link>
        <Link className="link" to="/performance/masterFind">Master Find</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Performance
