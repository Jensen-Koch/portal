import React from 'react'
import '../../styles/CriticalBusinessFunctions/criticalBusinessFunctionsWidgets.css'
import Charts from '../../components/Charts'
import { login } from '../../components/data/CriticalBusinessFunctions'

const Login = () => {
  return (
    <div className="widget-container">
        {login.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default Login
