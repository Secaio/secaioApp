import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'



export default props => 
<aside className="menu-area">
<nav className="menu navbar navbar-expand-lg">

    <Link to="/">
        <i className="fa fa-home"></i>  Home
    </Link>
    <Link to="/about">
        <i className="fa fa-user-secret"></i>  About Me
    </Link>
    <Link to="/services">
        <i className="fa fa-coffee"></i>  Services
    </Link>                    
    <Link to="/contact">
        <i className="fa fa-users"></i>  Contact
    </Link>   
</nav>
</aside>