import React from 'react'
import '../../styles/Infrastructure/infrastructure.css'
import { Link, Outlet } from 'react-router-dom'

const Infrastructure = () => {
  return (
    <div className="infrastructure">
      <h1 className="title">NOC Mastermind Infrastructure Dashboard</h1>
      <div className="infrastructure-links">
        <Link className="link" to="/infrastructure/topKafkaLag">Top Kafka Lag</Link>
        <Link className="link" to="/infrastructure/alchemyPlanning">Alchemy - Planning</Link>
        <Link className="link" to="/infrastructure/alchemyProcurement">Alchemy - Procurement</Link>
        <Link className="link" to="/infrastructure/backOffice">Back Office</Link>
        <Link className="link" to="/infrastructure/coreLoad">Core Load</Link>
        <Link className="link" to="/infrastructure/integrationsAPI">Integrations - API</Link>
        <Link className="link" to="/infrastructure/integrationsEDI">Integrations - EDI</Link>
        <Link className="link" to="/infrastructure/loadBooking">Load Booking</Link>
        <Link className="link" to="/infrastructure/loadExecution2">Load Execution</Link>
        <Link className="link" to="/infrastructure/procurementCapacity">Procurement Capacity</Link>
        <Link className="link" to="/infrastructure/recordManagement2">Record Management</Link>
        <Link className="link" to="/infrastructure/sharedServices2">Shared Services</Link>
        <Link className="link" to="/infrastructure/sharedServicesLSE">Shared Services - LSE</Link>
        <Link className="link" to="/infrastructure/masteryAPI">Mastery API</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Infrastructure
