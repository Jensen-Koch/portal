import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { sharedServicesInfrastructure } from '../../components/data/Infrastructure'

const SharedServicesInfrastructure = () => {
  return (
    <div className="widget-container">
        {sharedServicesInfrastructure.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default SharedServicesInfrastructure
