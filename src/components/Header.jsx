import './Header.css'
import Nav from './Nav'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <React.Fragment>
        <header id="head" className="header static-top" >
            <div className="d-flex">
                <div className="mr-auto p-2">
                     <h1 className="mt-3">
                        <Link to="/">
                            <i className={`fa fa-${props.icon}`}> </i> {props.title}
                        </Link>
                    </h1>
                </div>
                <div className="p-2">
                <Nav />
                </div>
            </div>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    </React.Fragment>


