import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { sharedServicesLSE } from '../../components/data/Infrastructure'

const SharedServicesLSE = () => {
  return (
    <div className="widget-container">
        {sharedServicesLSE.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default SharedServicesLSE
