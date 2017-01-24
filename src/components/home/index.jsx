import React, {Component} from 'react'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Bienvenidos</h1>
        <p>Esta es un taller para nextin sas.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Courses</a> </p>
      </div>
    )
  }
}

export default Home
