import React from 'react'
import { Link } from 'react-router-dom'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses =  'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  )
}

export default sideDrawer