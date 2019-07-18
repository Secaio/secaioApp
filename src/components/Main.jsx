import './Main.css'
import React from 'react'

export default props =>
    <React.Fragment >
        <main className="content container-fluid">
            <div className="main col-xs-6 p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>