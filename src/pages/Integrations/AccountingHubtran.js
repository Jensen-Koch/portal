import React from 'react'
import '../../styles/Integrations/integrationsWidgets.css'
import Charts from '../../components/Charts'
import { accountingHubtran } from '../../components/data/Integrations'

const AccountingHubtran = () => {
  return (
    <div className="widget-container">
        {accountingHubtran.map((data) => (
          <>
            <Charts url={data.url} title={data.title} />
          </>
        ))}
    </div>
  )
}

export default AccountingHubtran
