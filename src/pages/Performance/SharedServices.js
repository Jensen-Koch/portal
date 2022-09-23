import React from 'react'
import '../../styles/Performance/performanceWidgets.css'
import Charts from '../../components/Charts'
import { sharedServices } from '../../components/data/Performance'

const SharedServices = () => {
  return (
    <div className="widget-container">
        {sharedServices.map((data) => (
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

export default SharedServices