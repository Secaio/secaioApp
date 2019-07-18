import './Main.css'
import React from 'react'

export default props =>
    <React.Fragment >
        <main className="content container-fluid">
            <div className="main p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>