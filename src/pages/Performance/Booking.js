import React from 'react'
import '../../styles/Performance/performanceWidgets.css'
import Charts from '../../components/Charts'
import { booking } from '../../components/data/Performance'

const Booking = () => {
  return (
    <div className="widget-container">
        {booking.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
            <div className="link-wrapper">
              <a href={data.runbook} target="_blank" rel="noopener noreferrer" className="chart-button">Runbook</a>
            </div>
          </>
        ))}
    </div>
  )
}

export default Booking
