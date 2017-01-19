export * as types from './actionsTypes'

export default function searchMoviesSuccess(movies) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    payload:movies
  }
}
