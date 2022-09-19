import React, {useState} from 'react'
import '../styles/charts.css'
import PulseLoader from "react-spinners/PulseLoader";

const Charts = (props) => {
  const [loading, setLoading] = useState(true)

  const nrChartUrl = new URL(props.url)
  nrChartUrl.searchParams.append('height', '300px')
  nrChartUrl.searchParams.append('timepicker', 'true')

  return (
    <div className="charts-container">
      {loading ? (
        <div className="spinner-container" >
          <PulseLoader
            color="#36d7b7"
            margin={3}
            speedMultiplier={0.75}
          />
        </div>
      ) : undefined}

      <iframe 
        alt="new relic chart" 
        className="chart-frame"
        src={nrChartUrl.href} 
        scrolling="no"
        width="100%"
        height="350px"
        onLoad={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
      />
    </div>
  )
}

export default Charts
