import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i>  Home
            </Link>
            <Link to="/about">
                <i className="classname fa fa-user-secret"></i>  About Me
            </Link>
            <Link to="/services">
                <i className="classname fa fa-coffee"></i>  Services
            </Link>                    
            <Link to="/contact">
                <i className="classname fa fa-users"></i>  Contact
            </Link>   
        </nav>
    </aside>