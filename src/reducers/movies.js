import initialState from './initialState'
import * as types from '../actions/actionsTypes'

export default function moviesReducer(state = initialState.movies, action) {
  switch (action.type) {
  case types.SEARCH_MOVIES_SUCCESS:
    return [ ...action.payload ]
  case types.DELETE_MOVIES_SUCCESS:
    console.log('estado ',[...state.filter(movie => movie.id !== action.payload)])
    return [
      ...state.filter(movie => movie.id !== action.payload)
    ]
  case types.SAVE_MOVIES_SUCCESS:
    debugger
    return [
      ...state,
      Object.assign({}, action.payload)
    ]
  case types.UPDATE_MOVIES_SUCCESS:
    debugger
    return [
      ...state.filter(movie => movie.id != action.payload.id),
      Object.assign({}, action.payload)
    ]
  default:
    return state
  }
}
