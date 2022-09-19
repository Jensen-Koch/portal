import React from 'react'
import '../../styles/Performance/masterFind.css'
import Charts from '../../components/Charts'
import { masterFind } from '../../components/data/Performance'

const MasterFind = () => {
  return (
    <div className="masterfind-container">
        {masterFind.map((data) => (
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

export default MasterFind
