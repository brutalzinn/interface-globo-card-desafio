import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './plugins/theme'
import Routers from './routers'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <Routers />
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
