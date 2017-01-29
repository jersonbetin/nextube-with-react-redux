import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import toastr from 'toastr'

import * as moviesActions from '../../actions/moviesActions'

class ShowMoviePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      movie: Object.assign({}, this.props.movie)
    }

    this.onHandleCheckViewed = this.onHandleCheckViewed.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.movie.id != nextProps.movie.id){
      this.setState({movie: Object.assign({}, nextProps.movie)})
    }
  }

  onHandleCheckViewed(event){
    event.preventDefault()
    let movie = Object.assign({}, this.state.movie)
    movie.viewed = true
    this.props.actions.saveMovie(movie)
      .then(()=> {
        this.setState({
          movie:movie
        })
        toastr.success('Guardado con exito')
      }).catch(error => {
        console.log(error)
        toastr.error('Error al guardar mensaje')
      })
  }

  render() {
    const { movie } = this.state
    const buttonType = movie.viewed ? 'btn-success disabled' :'btn-danger'
    return (
      <div className="col-lg-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            {movie.name} - <b>{movie.actor}</b>
          </div>
          <div className="panel-body">
            {<iframe
             className="col-lg-12"
             height="440"
             src={movie.link}
             frameBorder="0"
             allowFullScreen/>}
          </div>
          <div className="panel-footer">
            <a className={'btn ' + buttonType} onClick={this.onHandleCheckViewed}>{movie.viewed ? 'Visto' :'Marcar Como Visto'}</a>
          </div>
        </div>
      </div>
    )
  }
}

ShowMoviePage.propTypes = {
  actions: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
}

function getMovieById(movies, id){
  const movie =  movies.filter(movie => movie.id == id)
  if(movie.length > 0) return movie[0]
  return null
}

function mapStateToProps(state, ownProps) {
  let movie = null
  if(ownProps.params.id){
    movie = getMovieById(state.movies, ownProps.params.id)
  }
  if(!movie){
    movie = {id:0, name:'', actor:'', link:'' ,viewed:false }
  }

  return {
    movie: movie,
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  dispatch(moviesActions.searchMovies())
  return {
    actions:bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoviePage)
