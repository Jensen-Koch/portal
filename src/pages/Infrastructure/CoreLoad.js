import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { coreLoad } from '../../components/data/Infrastructure'

const CoreLoad = () => {
  return (
    <div className="widget-container">
        {coreLoad.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default CoreLoad
