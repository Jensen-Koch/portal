import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { recordManagementInfrastructure } from '../../components/data/Infrastructure'

const RecordManagementInfrastructure = () => {
  return (
    <div className="widget-container">
        {recordManagementInfrastructure.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default RecordManagementInfrastructure
