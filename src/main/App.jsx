import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'

import Footer from '../components/Footer'
import Routes from './Routes'
/*import About from '../components/About'
import Logo   from '../components/template/Logo' */


const headerProps = {
    icon: 'address-card',
    title: 'Romeu',
    subtitle: 'My personal REACT web page'
}

export default props => 
<BrowserRouter>
  <div className="app">
     <Header {...headerProps} />
     <Routes />
     <Footer />
  </div>
</BrowserRouter>


/*<Logo /> <Nav />  
       
      */