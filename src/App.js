import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import Performance from './pages/Performance/Performance'
import LoadPlanning from './pages/Performance/LoadPlanning'
import LoadExecution from './pages/Performance/LoadExecution'
import Procurement from './pages/Performance/Procurement'
import Booking from './pages/Performance/Booking'
import Infrastructure from './pages/Infrastructure/Infrastructure'
import Integrations from './pages/Integrations/Integrations'
import Interfaces from './pages/Interfaces/Interfaces'
import CriticalBusinessFunctions from './pages/CriticalBusinessFunctions/CriticalBusinessFunctions'
import RecordManagement from './pages/Performance/RecordManagement'
import SharedServices from './pages/Performance/SharedServices'
import Accounting from './pages/Performance/Accounting'
import MasterFind from './pages/Performance/MasterFind'

const App = () => {
  return (
    <div className="App">
      <Router>
          <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
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

          </Route>
          <Route path="integrations" element={<Integrations/>}>
            
          </Route>
          <Route path="interfaces" element={<Interfaces/>}>
          
          </Route>
          <Route path="criticalbusinessfunctions" element={<CriticalBusinessFunctions/>}>
          
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
