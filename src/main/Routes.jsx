import React from 'react'
import { Switch, Route, Redirect } from 'react-router' 

import Home from '../home/Home'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />                
        <Redirect from='*' to="/" />
    </Switch>