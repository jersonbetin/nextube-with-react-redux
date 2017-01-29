import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import toastr from 'toastr'
import {browserHistory} from 'react-router'

import * as moviesActions from '../../actions/moviesActions'
import MovieForm from './MovieForm'

class ManageMoviePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      movie: Object.assign({}, this.props.movie),
      saving: false
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSave = this.onHandleSave.bind(this)
    this.onClear = this.onClear.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.movie.id != nextProps.movie.id){
      this.setState({movie: Object.assign({}, nextProps.movie)})
    }
  }

  onHandleChange(event){
    const field = event.target.name
    let movie = this.state.movie
    movie[field] = event.target.value
    this.setState({movie})
  }

  onHandleSave(event){
    this.setState({saving:true})
    event.preventDefault()
    console.log(this.state.movie)
    this.props.actions.saveMovie(this.state.movie)
      .then(()=> {
        this.setState({saving:false})
        browserHistory.push('movies')
        toastr.success('Guardado con exito')
      }).catch(error => {
        console.log(error)
        this.setState({saving:false})
        toastr.error('Error al guardar mensaje')
      })
  }

  onClear(){
    let movie = {id:0, name:'', actor:'', link:'' , viewed:false }
    this.setState({movie})
  }

  render() {
    let { movie } = this.state
    return (
      <div className="container">
        <h1><center>Formulario de Peliculas</center></h1>
        <div className="col-lg-6">
          <img
            className="img-thumbnail col-lg-12"
            src="https://itacapsicologia.files.wordpress.com/2014/06/viernes-de-pelc3a3c2adcula1.jpg"/>
        </div>
        <div className="col-lg-6">
          <MovieForm
            movie = {movie}
            onChange={this.onHandleChange}
            onSave={this.onHandleSave}
            onClear = {this.onClear}
            saving = {this.state.saving}
          />
        </div>
      </div>
    )
  }
}

ManageMoviePage.propTypes = {
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
    actions: bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMoviePage)
