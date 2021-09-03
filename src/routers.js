import React from 'react'
import { Router, Redirect } from '@reach/router'
import history from './config/history'

import Home from './views/home'
import CardForm from './views/card.form'

const Routers = () => {

    return(
      <>
      <Router history={history}>
      <CardForm path='/form'/>

      <Home path='/'/>

      </Router>
      </>)

    }

    export default Routers