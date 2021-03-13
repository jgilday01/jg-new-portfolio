import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Listing from './components/Listing'

import { PROJECTS1 } from './shared/projects1'
import { PROJECTS2 } from './shared/projects2'


ReactDOM.render(
  <React.StrictMode>
    <div id="full-page">
      <div className="container-fluid">
        <About />
        <Listing header={"Recent Projects"} projects={PROJECTS1} />
        <Listing header={"Other Projects"} projects={PROJECTS2} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
