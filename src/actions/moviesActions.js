import * as types from './actionsTypes'
import movieApi from '../api/mockMoviesApi'

export function searchMoviesSuccess(movies) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload:movies
  }
}

export function deleteMovieSuccess(movieId){
  return {
    type:types.DELETE_MOVIES_SUCCESS,
    payload:movieId
  }
}

export function saveMovieSuccess(movie) {
  return {
    type:types.SAVE_MOVIES_SUCCESS,
    payload:movie
  }
}

export function updateMovieSuccess(movie) {
  return {
    type:types.UPDATE_MOVIES_SUCCESS,
    payload:movie
  }
}

export function saveMovie(movie){
  return (dispatch) => {
    return movieApi.saveMovie(movie).then(savedMovie => {
      movie.id ? dispatch(updateMovieSuccess(savedMovie)) : dispatch(saveMovieSuccess(savedMovie))
    }).catch(error => {
      throw (error)
    })
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

export function deleteMovie(movieId){
  return (dispatch) => {
    return movieApi.deleteMovie(movieId)
      .then(()=>{
        dispatch(deleteMovieSuccess(movieId))
      })
      .catch((error)=>{
        throw (error)
      })
  }
}
