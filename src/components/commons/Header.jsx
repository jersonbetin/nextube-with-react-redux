import React from 'react'
import { IndexLink, Link } from 'react-router'
import './style.scss'

const Header = () => {
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Nextube</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav nav-items">
              <li><IndexLink to="/" activeClassName="active">Inicio</IndexLink></li>
              <li><Link to="/movies" activeClassName="active">Peliculas</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header
