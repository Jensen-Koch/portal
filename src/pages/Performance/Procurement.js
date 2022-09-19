import React from 'react'
import '../../styles/Performance/procurement.css'
import Charts from '../../components/Charts'
import { procurement } from '../../components/data/Performance'

const Procurement = () => {
  return (
    <div className="procurement-container">
        {procurement.map((data) => (
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

export default Procurement
