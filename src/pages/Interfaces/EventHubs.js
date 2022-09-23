import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { eventHubs } from '../../components/data/Interfaces'

const EventHubs = () => {
  return (
    <div className="widget-container">
        {eventHubs.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default EventHubs