import React from 'react'
import '../../styles/Interfaces/interfaces.css'
import { Link, Outlet } from 'react-router-dom'

const Interfaces = () => {
  return (
    <div className="interfaces">
      <h1 className="title">NOC Mastermind Interfaces Dashboard</h1>
      <div className="interfaces-links">
        <Link className="link" to="/interfaces/load">Load</Link>
        <Link className="link" to="/interfaces/capacity">Capacity</Link>
        <Link className="link" to="/interfaces/bookings">Bookings</Link>
        <Link className="link" to="/interfaces/recordManagementInterfaces">Record Management</Link>
        <Link className="link" to="/interfaces/execution">Execution</Link>
        <Link className="link" to="/interfaces/accountingInterfaces">Accounting</Link>
        <Link className="link" to="/interfaces/procurementInterfaces">Procurement</Link>
        <Link className="link" to="/interfaces/eventHubs">Event Hubs</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Interfaces