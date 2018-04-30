import React, { Component } from 'react';
import cat from 'images/cat';
import dog from 'images/dog';
import dogs from 'images/dogs';

import Header from './Header/Header';
import Routes from '../Routes';

import {
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      // <div className="container">

      //   <div className="image-wrapper">
      //     <img src={cat} className="image-wrapper__image" alt="" />
      //   </div>



      //   <div className="image-wrapper">
      //     <img src={dog} className="image-wrapper__image" alt="" />
      //   </div>

      //   <div className="image-wrapper">
      //     <img src={dogs} className="image-wrapper__image" alt="" />
      //   </div>

      //</div>

      <Router >
        <div className="container-fluid">
          <Header></Header>
          <hr />

          <Routes />
        </div>
      </Router>
    )
  }
}

export default App;