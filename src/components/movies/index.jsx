import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SweetAlert from 'sweetalert-react'
import {browserHistory} from 'react-router'

import * as moviesActions from '../../actions/moviesAcitions'
import MoviesList from './MoviesList'
import InputSearch from '../commons/InputSearch'

class Movies extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      movies:[],
      show:false,
      itemDelete: null
    }
    this.onHandleKeyPress = this.onHandleKeyPress.bind(this)
    this.onHandleDeleteItem = this.onHandleDeleteItem.bind(this)
    this.onRedirectNewMovie = this.onRedirectNewMovie.bind(this)
  }

  componentWillMount(){
    this.props.actions.searchMovies()
      .then(() =>{
        this.setState({
          movies: [...this.props.movies]
        })
      })
  }

  onHandleKeyPress(event){
    let chunk = event.target.value
    let filter = this.props.movies.filter((movie) => {
      return movie.name.toLowerCase().indexOf(chunk) > -1
    })

    this.setState({
      movies:filter
    })
  }

  onHandleDeleteItem(){
    this.props.actions.deleteMovie(this.state.itemDelete)
    this.setState({
      movies:[
        ...this.props.movies.filter(movie => movie.id !== this.state.itemDelete)
      ],
      show:false,
      itemDelete:null
    })
  }

  onRedirectNewMovie(){
    browserHistory.push('/movie')
  }

  render(){
    let { movies } = this.state
    return (
      <div className="container">
        <h1 className="text-center">Lista de Peliculas</h1>
        <div className="col-lg-12">
          <div className="pull-left col-lg-6">
            <InputSearch type="text" placeholder="Buscar peliculas por nombre" onpress={this.onHandleKeyPress}/>
          </div>
          <div className="col-lg-2 pull-right">
            <a className="btn btn-lg btn-primary m-b-s col-lg-12" onClick={this.onRedirectNewMovie}>Nuevo</a>
          </div>
        </div>
        <MoviesList
          movies={movies}
          deleteItem={(event) => this.setState({show:true, itemDelete: event.target.id})}
        />
        <SweetAlert
          show={this.state.show}
          title="Confirmar"
          text="SweetAlert in react"
          showCancelButton
          onConfirm={this.onHandleDeleteItem}
          onCancel={()=> this.setState({show:false, itemDelete:null})}
        />
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
