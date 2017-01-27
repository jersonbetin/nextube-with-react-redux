import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import HomePage from './components/home/index'
import Movies from './components/movies/index'
import ManageMoviePage from './components/movies/ManageMoviePage'

export default (
  <Route path='/' components={App}>
    <IndexRoute components={HomePage} />
    <Route path='/movies' components={Movies} />
    <Route path='/movie' components={ManageMoviePage} />
  </Route>
)
