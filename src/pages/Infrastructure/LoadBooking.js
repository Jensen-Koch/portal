import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { loadBooking } from '../../components/data/Infrastructure'

const LoadBooking = () => {
  return (
    <div className="widget-container">
        {loadBooking.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default LoadBooking
