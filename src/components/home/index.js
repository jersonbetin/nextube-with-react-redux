import React, {Component, PropTypes} from 'react'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <h1>Hola 2</h1>
    )
  }
}

Home.propTypes = {
  props: PropTypes.string
}

export default Home
