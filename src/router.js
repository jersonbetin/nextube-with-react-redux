import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import HomePage from './components/home/index'
import Movies from './components/movies/index'

export default (
  <Route path='/' components={App}>
    <IndexRoute components={HomePage} />
    <Route path='/movies' components={Movies} />
  </Route>
)
