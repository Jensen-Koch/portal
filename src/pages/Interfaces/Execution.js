import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { execution } from '../../components/data/Interfaces'

const Execution = () => {
  return (
    <div className="widget-container">
        {execution.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default Execution