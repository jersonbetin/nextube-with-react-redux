import * as types from './actionsTypes'
import movieApi from '../api/mockMoviesApi'

export function searchMoviesSuccess(movies) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload:movies
  }
}

export function searchMovies() {
  return (dispatch) => {
    return movieApi.getAllMovies().then(movies => {
      dispatch(searchMoviesSuccess(movies))
    }).catch( error => {
      console.log(error)
    })
  }
}
