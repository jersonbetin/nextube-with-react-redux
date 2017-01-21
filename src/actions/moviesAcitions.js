import * as types from './actionsTypes'
import movieApi from '../api/mockMoviesApi'

export default function searchMoviesSuccess(movies) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload:movies
  }
}

export default function searchMovies() {
  return (dispatch) => {
    return movieApi.getAllMovies().then(movies => {
      console.log(movies)
      dispatch(searchMoviesSuccess(movies))
    }).catch( error => {
      console.log(error)
    })
  }
}
