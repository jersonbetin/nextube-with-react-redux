import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as moviesActions from '../../actions/moviesAcitions'
import MovieForm from './MovieForm'

class ManageMoviePage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      movie: Object.assign({}, this.props.movie)
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleSave = this.onHandleSave.bind(this)
    this.onClear = this.onClear.bind(this)
  }

  onHandleChange(event){
    const field = event.target.name
    let movie = this.state.movie
    movie[field] = event.target.value
    this.setState({movie})
  }

  onHandleSave(event){
    event.preventDefault()
    console.log(this.state.movie)


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
          />
        </div>
      </div>
    )
  }
}

ManageMoviePage.propTypes = {
  actions: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
}

function mapStateToProps() {
  let movie = {id:0, name:'', actor:'', link:'' ,viewed:false }

  return {
    movie: movie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMoviePage)
