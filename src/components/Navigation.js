import React, { useState } from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'

import * as FaIcons from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import { IconContext } from 'react-icons'
import logo from '../images/logo.svg'

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{color: "#fff"}}>
        <div className="navbar" >
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img className="logo-nav" src={logo} alt="Logo" />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-x">
                <AiIcon.AiOutlineCloseCircle />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className="link-name" to={item.path}>
                    {item.icon}
                    <span className="nav-title" >{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navigation
