import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { loadExecutionIntegrations } from '../../components/data/Integrations'

const LoadExecutionIntegrations = () => {
  return (
    <div className="widget-container">
        {loadExecutionIntegrations.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default LoadExecutionIntegrations