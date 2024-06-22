import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, url, date, author } = this.props;

    return (
      <div>
        <div className="card m-3" style={{ width: '18rem' }}>
          <img src={imgUrl} className="card-img-top" alt="..." style={{ width: '100%', height: '200px' }} />
          <div className="card-body">
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <h5 className="card-title">{title}..</h5>
            </a>
            <p className="card-text">{desc}..</p>
            <div className="d-flex justify-content-around">
              <p className="card-text">{author}</p>
              <p className="card-text">
                <small className="text-body-secondary">Date: {date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
