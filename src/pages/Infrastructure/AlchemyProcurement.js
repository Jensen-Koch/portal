import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { alchemyProcurement } from '../../components/data/Infrastructure'

const AlchemyProcurement = () => {
  return (
    <div className="widget-container">
        {alchemyProcurement.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default AlchemyProcurement
