import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { integrationsAPI } from '../../components/data/Infrastructure'

const IntegrationsAPI = () => {
  return (
    <div className="widget-container">
        {integrationsAPI.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default IntegrationsAPI
