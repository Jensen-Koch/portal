import React from 'react'
import '../../styles/CriticalBusinessFunctions/criticalBusinessFunctionsWidgets.css'
import Charts from '../../components/Charts'
import { cbf } from '../../components/data/CriticalBusinessFunctions'

const CBF = () => {
  return (
    <div className="widget-container">
        {cbf.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default CBF