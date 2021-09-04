import React from 'react'
import { Router, Redirect } from '@reach/router'

import Home from './views/home'
import CardForm from './views/card.form'

const Routers = () => {

    return(
      <>
      <Router >

      <Home path='/'/>
      <CardForm path='/form/:id'/>
      <CardForm path='/form'/>

      </Router>
      </>)

    }

    export default Routers