import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { bookings } from '../../components/data/Interfaces'

const Bookings = () => {
  return (
    <div className="widget-container">
        {bookings.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default Bookings