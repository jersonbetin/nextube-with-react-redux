import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/movies" activeClassName="active">Movies</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
    //props: PropTypes.string
}

export default Header
