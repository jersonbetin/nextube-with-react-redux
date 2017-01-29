import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, browserHistory} from 'react-router'
import routes from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import '../node_modules/sweetalert/dist/sweetalert.css'
import '../node_modules/toastr/build/toastr.min.css'
//import '../node_modules/sweetalert/dist/sweetalert.min'

import store from './store/index'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
