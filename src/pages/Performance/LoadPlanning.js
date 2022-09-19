import React from 'react'
import '../../styles/Performance/loadPlanning.css'
import Charts from '../../components/Charts'
import { loadPlanning } from '../../components/data/Performance'

const LoadPlanning = () => {
  return (
    <div className="load-planning-container">
        {loadPlanning.map((data) => (
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

export default LoadPlanning

