import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import HomePage from './components/home/index'
import Movies from './components/movies/index'
import ManageMoviePage from './components/movies/ManageMoviePage'
import ShowMoviePage from './components/movies/ShowMoviePage'

export default (
  <Route path='/' components={App}>
    <IndexRoute components={HomePage} />
    <Route path='/movies' components={Movies} />
    <Route path='/movie' components={ManageMoviePage} />
    <Route path='/movie/:id' components={ManageMoviePage} />
    <Route path='/movie/:id/show' components={ShowMoviePage} />
  </Route>
)
