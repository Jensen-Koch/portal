import React from 'react'
import {FaSitemap, FaUsers, FaHome} from 'react-icons/fa'
import {BsSpeedometer} from 'react-icons/bs'
import {SiApachekafka} from 'react-icons/si'
import {GiHandTruck} from 'react-icons/gi'

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Performance',
    path: '/performance/loadPlanning',
    icon: <BsSpeedometer />,
    cName: 'nav-text'
  },
  {
    title: 'Infrastructure',
    path: '/infrastructure/topKafkaLag',
    icon: <SiApachekafka />,
    cName: 'nav-text'
  },
  {
    title: 'Integrations',
    path: '/integrations/integrationsPage',
    icon: <GiHandTruck />,
    cName: 'nav-text'
  },
  {
    title: 'Interfaces',
    path: '/interfaces/load',
    icon: <FaSitemap />,
    cName: 'nav-text'
  },
  {
    title: 'Critical Business Functions',
    path: '/criticalbusinessfunctions/cbf',
    icon: <FaUsers />,
    cName: 'nav-text'
  },
]
