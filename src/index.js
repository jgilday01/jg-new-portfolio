import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Listing from './components/Listing'

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <About />
      <Listing />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
