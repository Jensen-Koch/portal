import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { backOffice } from '../../components/data/Infrastructure'

const BackOffice = () => {
  return (
    <div className="widget-container">
        {backOffice.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default BackOffice
