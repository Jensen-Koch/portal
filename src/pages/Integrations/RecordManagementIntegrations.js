import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { recordManagementIntegrations } from '../../components/data/Integrations'

const RecordManagementIntegrations = () => {
  return (
    <div className="widget-container">
        {recordManagementIntegrations.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default RecordManagementIntegrations