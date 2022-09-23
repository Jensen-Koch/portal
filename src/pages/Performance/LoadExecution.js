import React from 'react'
import '../../styles/Performance/performanceWidgets.css'
import Charts from '../../components/Charts'
import { loadExecution } from '../../components/data/Performance'

const LoadExecution = () => {
  return (
    <div className="widget-container">
        {loadExecution.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
            <div className="link-wrapper">
              <a href={data.runbook} target="_blank" rel="noopener noreferrer" className="chart-button">Runbook</a>
            </div>
          </>
        ))}
    </div>
  )
}

export default LoadExecution
