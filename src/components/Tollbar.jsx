import React from 'react'
import { Link } from 'react-router-dom'

import DrawerToggleButton from './DrawerToggleButton'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"> <Link to="/"><i className="fa fa-address-card"></i> ROMEU</Link> </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="/"><i className="fa fa-home"></i>  Home </Link>
          </li>
          <li>
            <Link to="/about"> <i className="fa fa-user-secret"></i>  About Me  </Link>
          </li>
          <li>
            <Link to="/services"> <i className="fa fa-coffee"></i>  Services </Link>
          </li>
          <li>
            <Link to="/contact"> <i className="fa fa-users"></i>  Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar