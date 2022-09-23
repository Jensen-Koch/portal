import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { procurementCapacity } from '../../components/data/Infrastructure'

const ProcurementCapacity = () => {
  return (
    <div className="widget-container">
        {procurementCapacity.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default ProcurementCapacity
