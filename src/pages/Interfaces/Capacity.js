import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { capacity } from '../../components/data/Interfaces'

const Capacity = () => {
  return (
    <div className="widget-container">
        {capacity.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default Capacity