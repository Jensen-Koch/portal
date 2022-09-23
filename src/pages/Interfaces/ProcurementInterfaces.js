import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { procurementInterfaces } from '../../components/data/Interfaces'

const ProcurementInterfaces = () => {
  return (
    <div className="widget-container">
        {procurementInterfaces.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default ProcurementInterfaces