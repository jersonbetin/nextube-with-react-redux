import React, {Component, PropTypes} from 'react'
import Header from './commons/Header'

class App extends Component {
  constructor(props, context){
    super(props, context)
  }

  render(){
    return(
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
