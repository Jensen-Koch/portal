import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { load } from '../../components/data/Interfaces'

const Load = () => {
  return (
    <div className="widget-container">
        {load.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default Load