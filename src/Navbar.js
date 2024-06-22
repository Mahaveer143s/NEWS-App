import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {


  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg fixed-top bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/technology">Tech</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/entertainment">Fun</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/health">Health</Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   
      </div>
    )
  }
}
