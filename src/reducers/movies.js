import initialState from './initialState'
import * as types from '../actions/actionsTypes'

export default function moviesReducer(state = initialState.movies, action) {
  switch (action.type) {
  case types.SEARCH_MOVIES_SUCCESS:
    console.log(...action.payload)
    return [ ...action.payload ]
  default:
    return state
  }
}
