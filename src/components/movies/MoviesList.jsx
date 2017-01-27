import React, { PropTypes} from 'react'
import MovieRow from './MovieRow'


const MoviesList = ({ movies, deleteItem }) => {
  return (
    <div className="col-lg-12">
      { movies.length === 0 && <h3 className="text-center ">No Existen Peliculas</h3>}
      {
        movies.map(movie=>
          <MovieRow movie={movie} key={movie.id} deleteItem={deleteItem}/>
        )
      }
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}


export default MoviesList
