import React, { Component } from 'react'

export default class demo extends Component {


  render() {
    return (
      <div>
      <button type="button" className="btn btn-outline-primary position-fixed bottom-0 start-0" style={{ zIndex: 3, margin: '5vh' }}>
        &lt; Previous
      </button>

      <button type="button" className="btn btn-outline-primary position-fixed bottom-0 end-0" style={{ zIndex: 3, margin: '5vh' }}>
        Next &gt;
      </button>
    </div>
    )
  }
}
