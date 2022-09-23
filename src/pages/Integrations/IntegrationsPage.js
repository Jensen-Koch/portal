import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { integrationsPage } from '../../components/data/Integrations'

const IntegrationsPage = () => {
  return (
    <div className="widget-container">
        {integrationsPage.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default IntegrationsPage