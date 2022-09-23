import React from 'react'
import '../../styles/Integrations/integrations.css'
import { Link, Outlet } from 'react-router-dom'

const Integrations = () => {
  return (
    <div className="integrations">
      <h1 className="title">NOC Mastermind Integrations Dashboard</h1>
      <div className="integrations-links">
        <Link className="link" to="/integrations/integrationsPage">Integrations</Link>
        <Link className="link" to="/integrations/loadExecutionIntegrations">Load Execution</Link>
        <Link className="link" to="/integrations/accountingHubtran">Accounting - Hubtran</Link>
        <Link className="link" to="/integrations/routePostings">Route Postings</Link>
        <Link className="link" to="/integrations/loadBookingIntegrations">Load Booking</Link>
        <Link className="link" to="/integrations/recordManagementIntegrations">Record Management</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Integrations