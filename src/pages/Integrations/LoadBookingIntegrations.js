import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { loadBookingIntegrations } from '../../components/data/Integrations'

const LoadBookingIntegrations = () => {
  return (
    <div className="widget-container">
        {loadBookingIntegrations.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default LoadBookingIntegrations