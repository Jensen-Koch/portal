import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { loadExecutionInfrastructure } from '../../components/data/Infrastructure'

const LoadExecutionInfrastructure = () => {
  return (
    <div className="widget-container">
        {loadExecutionInfrastructure.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default LoadExecutionInfrastructure
