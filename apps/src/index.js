// require('./assets/styles/styles.scss');

import './assets/styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './components/App.jsx'; // import the main app component

ReactDOM.render(<App />, document.getElementById('root')); // render our App component and mount it to our #root element