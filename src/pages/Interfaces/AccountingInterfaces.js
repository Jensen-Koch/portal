import React from 'react'
import '../../styles/Interfaces/interfacesWidgets.css'
import Charts from '../../components/Charts'
import { accountingInterfaces } from '../../components/data/Interfaces'

const AccountingInterfaces = () => {
  return (
    <div className="widget-container">
        {accountingInterfaces.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default AccountingInterfaces