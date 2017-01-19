import React from 'react'
import reactDom from 'react-dom'

class App extends React.Component {
  render(){
    return(
      <h1>Hola mundo</h1>
    )
  }
}

reactDom.render(<App />, document.getElementById('root'))
