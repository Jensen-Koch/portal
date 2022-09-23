import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { alchemyPlanning } from '../../components/data/Infrastructure'

const AlchemyPlanning = () => {
  return (
    <div className="widget-container">
        {alchemyPlanning.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default AlchemyPlanning
