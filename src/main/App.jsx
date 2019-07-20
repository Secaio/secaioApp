import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'


import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from '../components/Tollbar'
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/Backdrop/Backdrop'

import Footer from '../components/Footer'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }


    render() {
      let backdrop
  
      if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
      }     
      return(
        <BrowserRouter>
       <div style={{ height: '100%' }}> 
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer  show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Routes />  
        <Footer />
      </div>
      </BrowserRouter>
      );
    }

}

export default App

/*

        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>


*/


/*<Logo /> <Nav />  
       
      */

      /*import About from '../components/About'
import Logo   from '../components/template/Logo' */

/*
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'


const headerProps = {
    icon: 'address-card',
    title: 'Romeu',
    subtitle: 'My personal REACT web page'
}

import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'

import Footer from '../components/Footer'
import Routes from './Routes'

 <div style={{ height: '100%' }}></div> 

<BrowserRouter>
  <div className="app">
     <Header {...headerProps} />
     <Routes />
     <Footer />
  </div>
</BrowserRouter>
*/
