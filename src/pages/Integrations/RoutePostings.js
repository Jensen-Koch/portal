import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { routePostings } from '../../components/data/Integrations'

const RoutePostings = () => {
  return (
    <div className="widget-container">
        {routePostings.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default RoutePostings