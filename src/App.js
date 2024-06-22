import './App.css';
import './NewsComponent/loadStyle.css';
import Navbar from './Navbar';
import React, { Component } from 'react';
import News from './NewsComponent/News';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './NewsComponent/Loader';



export default class App extends Component {
  render(){
    return(
      <>
      
      <div>
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<News Category="general" />} />
          <Route path="/business" element={<News Category="business" />} />
          <Route path="/sports" element={<News Category="sports" />} />
          <Route path="/technology" element={<News Category="technology" />} />
          <Route path="/entertainment" element={<News Category="entertainment" />} />
          <Route path="/health" element={<News Category="health" />} />
          <Route path="/load" element={<Loader/>} />
        </Routes>
      </Router>
      
    </div>
    </>);
  }
}

