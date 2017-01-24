import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as moviesActions from '../../actions/moviesAcitions'
import MoviesList from './MoviesList'
import InputSearch from '../commons/InputSearch'

class Movies extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      movies:[]
    }
    this.onHandleKeyPress = this.onHandleKeyPress.bind(this)
  }

  componentWillMount(){
    this.props.actions.searchMovies()
      .then(() =>{

        this.setState({
          movies:this.props.movies
        })
      })
  }

  onHandleKeyPress(event){
    console.log(event.key)
  }

  render(){
    let { movies } = {movies:[]}//this.state
    return (
      <div className="container">
        <h1 className="text-center">Lista de Peliculas</h1>
        <div className="col-lg-12">
          <div className="pull-left col-lg-6">
            <InputSearch type="text" placeholder="Buscar" onpress={this.onHandleKeyPress}/>
          </div>
          <div className="col-lg-2 pull-right">
            <a className="btn btn-lg btn-primary m-b-s col-lg-12">Nuevo</a>
          </div>
        </div>
        <MoviesList movies={movies}/>
      </div>
    )
  }
}

Movies.propTypes = {
  actions: PropTypes.object,
  movies: PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
