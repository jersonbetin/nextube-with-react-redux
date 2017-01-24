import React, {PropTypes} from 'react'

const MovieRow = ({movie}) => {
  return (
    <div className="col-lg-6">
      <div className="panel panel-default">
        <div className="panel-heading">{movie.name} - <b>{movie.actor}</b></div>
        <div className="panel-body">
          <iframe
            className="col-lg-12"
            height="180"
            src={movie.link}
            frameBorder="0"
            allowFullScreen/>
        </div>
        <div className="panel-footer">
          <a className="btn btn-info m-r-xs">Editar</a>
          <a className="btn btn-danger">Elimninar</a>
        </div>
      </div>
    </div>
  )
}

MovieRow.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieRow