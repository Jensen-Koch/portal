import React from 'react'
import '../../styles/Infrastructure/infrastructureWidgets.css'
import Charts from '../../components/Charts'
import { topKafkaLag } from '../../components/data/Infrastructure'

const TopKafkaLag = () => {
  return (
    <div className="widget-container">
        {topKafkaLag.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default TopKafkaLag
