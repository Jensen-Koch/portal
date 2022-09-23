import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { integrationsEDI } from '../../components/data/Infrastructure'

const IntegrationsEDI = () => {
  return (
    <div className="widget-container">
        {integrationsEDI.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default IntegrationsEDI
