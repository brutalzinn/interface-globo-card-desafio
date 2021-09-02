import React from 'react'
import { Router, Redirect } from '@reach/router'
import history from './config/history'

import Home from './views/home'

const Routers = () => {

    return(
      <>
      <Router history={history}>

      <Home path='/'/>

      </Router>
      </>)

    }

    export default Routers