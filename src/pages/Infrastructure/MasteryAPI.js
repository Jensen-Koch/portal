import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { masteryAPI } from '../../components/data/Infrastructure'

const MasteryAPI = () => {
  return (
    <div className="widget-container">
        {masteryAPI.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default MasteryAPI
