import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { recordManagementInterfaces } from '../../components/data/Interfaces'

const RecordManagementInterfaces = () => {
  return (
    <div className="widget-container">
        {recordManagementInterfaces.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default RecordManagementInterfaces