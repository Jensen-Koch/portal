import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Diagram from './pages/Diagram'

import Performance from './pages/Performance/Performance'
import LoadPlanning from './pages/Performance/LoadPlanning'
import LoadExecution from './pages/Performance/LoadExecution'
import Procurement from './pages/Performance/Procurement'
import Booking from './pages/Performance/Booking'
import RecordManagement from './pages/Performance/RecordManagement'
import SharedServices from './pages/Performance/SharedServices'
import Accounting from './pages/Performance/Accounting'
import MasterFind from './pages/Performance/MasterFind'

import Infrastructure from './pages/Infrastructure/Infrastructure'
import TopKafkaLag from './pages/Infrastructure/TopKafkaLag'
import AlchemyPlanning from './pages/Infrastructure/AlchemyPlanning'
import AlchemyProcurement from './pages/Infrastructure/AlchemyProcurement'
import BackOffice from './pages/Infrastructure/BackOffice'
import CoreLoad from './pages/Infrastructure/CoreLoad'
import IntegrationsAPI from './pages/Infrastructure/IntegrationsAPI'
import IntegrationsEDI from './pages/Infrastructure/IntegrationsEDI'
import LoadBooking from './pages/Infrastructure/LoadBooking'
import LoadExecutionInfrastructure from './pages/Infrastructure/LoadExecutionInfrastructure'
import ProcurementCapacity from './pages/Infrastructure/ProcurementCapacity'
import RecordManagementInfrastructure from './pages/Infrastructure/RecordManagementInfrastructure'
import SharedServicesInfrastructure from './pages/Infrastructure/SharedServicesInfrastructure'
import SharedServicesLSE from './pages/Infrastructure/SharedServicesLSE'
import MasteryAPI from './pages/Infrastructure/MasteryAPI'

import Integrations from './pages/Integrations/Integrations'
import IntegrationsPage from './pages/Integrations/IntegrationsPage'
import LoadExecutionIntegrations from './pages/Integrations/LoadExecutionIntegrations'
import AccountingHubtran from './pages/Integrations/AccountingHubtran'
import RoutePostings from './pages/Integrations/RoutePostings'
import LoadBookingIntegrations from './pages/Integrations/LoadBookingIntegrations'
import RecordManagementIntegrations from './pages/Integrations/RecordManagementIntegrations'

import Interfaces from './pages/Interfaces/Interfaces'
import Load from './pages/Interfaces/Load'
import Capacity from './pages/Interfaces/Capacity'
import Bookings from './pages/Interfaces/Bookings'
import RecordManagementInterfaces from './pages/Interfaces/RecordManagementInterfaces'
import Execution from './pages/Interfaces/Execution'
import AccountingInterfaces from './pages/Interfaces/AccountingInterfaces'
import ProcurementInterfaces from './pages/Interfaces/ProcurementInterfaces'
import EventHubs from './pages/Interfaces/EventHubs'

import CriticalBusinessFunctions from './pages/CriticalBusinessFunctions/CriticalBusinessFunctions'
import CBF from './pages/CriticalBusinessFunctions/CBF'
import Login from './pages/CriticalBusinessFunctions/Login'


const App = () => {
  return (
    <div className="App">
      <Router>
          <Navigation/>
        <Routes>

          <Route exact path="/" element={<Diagram/>}/>

          <Route path="performance" element={<Performance/>}>
            <Route path="loadPlanning" element={<LoadPlanning/>}/>
            <Route path="loadExecution" element={<LoadExecution/>}/>
            <Route path="procurement" element={<Procurement/>}/>
            <Route path="booking" element={<Booking/>}/>
            <Route path="recordManagement" element={<RecordManagement/>}/>
            <Route path="sharedServices" element={<SharedServices/>}/>
            <Route path="accounting" element={<Accounting/>}/>
            <Route path="masterFind" element={<MasterFind/>}/>
          </Route>

          <Route path="infrastructure" element={<Infrastructure/>}>
            <Route path="topKafkaLag" element={<TopKafkaLag/>}/>
            <Route path="alchemyPlanning" element={<AlchemyPlanning/>}/>
            <Route path="alchemyProcurement" element={<AlchemyProcurement/>}/>
            <Route path="backOffice" element={<BackOffice/>}/>
            <Route path="coreLoad" element={<CoreLoad/>}/>
            <Route path="integrationsAPI" element={<IntegrationsAPI/>}/>
            <Route path="integrationsEDI" element={<IntegrationsEDI/>}/>
            <Route path="loadBooking" element={<LoadBooking/>}/>
            <Route path="loadExecutionInfrastructure" element={<LoadExecutionInfrastructure/>}/>
            <Route path="procurementCapacity" element={<ProcurementCapacity/>}/>
            <Route path="recordManagementInfrastructure" element={<RecordManagementInfrastructure/>}/>
            <Route path="sharedServicesInfrastructure" element={<SharedServicesInfrastructure/>}/>
            <Route path="sharedServicesLSE" element={<SharedServicesLSE/>}/>
            <Route path="masteryAPI" element={<MasteryAPI/>}/>
          </Route>

          <Route path="integrations" element={<Integrations/>}>
            <Route path="integrationsPage" element={<IntegrationsPage/>}/>
            <Route path="loadExecutionIntegrations" element={<LoadExecutionIntegrations/>}/>
            <Route path="accountingHubtran" element={<AccountingHubtran/>}/>
            <Route path="routePostings" element={<RoutePostings/>}/>
            <Route path="loadBookingIntegrations" element={<LoadBookingIntegrations/>}/>
            <Route path="recordManagementIntegrations" element={<RecordManagementIntegrations/>}/>
          </Route>

          <Route path="interfaces" element={<Interfaces/>}>
            <Route path="load" element={<Load/>}/>
            <Route path="capacity" element={<Capacity/>}/>
            <Route path="bookings" element={<Bookings/>}/>
            <Route path="recordManagementInterfaces" element={<RecordManagementInterfaces/>}/>
            <Route path="execution" element={<Execution/>}/>
            <Route path="accountingInterfaces" element={<AccountingInterfaces/>}/>
            <Route path="procurementInterfaces" element={<ProcurementInterfaces/>}/>
            <Route path="eventHubs" element={<EventHubs/>}/>
          </Route>
          
          <Route path="criticalbusinessfunctions" element={<CriticalBusinessFunctions/>}>
            <Route path="cbf" element={<CBF/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
