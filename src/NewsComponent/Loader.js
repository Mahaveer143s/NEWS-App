import React, { Component } from 'react'
import './loadStyle.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader" style={{color:'blue'}}>Loading
      <span></span>
    </div> )
  }
}
