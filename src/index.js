import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Listing from './components/Listing'

import { PROJECTS1 } from './shared/projects1'
import { PROJECTS2 } from './shared/projects2'
import { PROJECTS3 } from './shared/projects3'

ReactDOM.render(
  <React.StrictMode>
    <div id="full-page">
      <div className="container-fluid">
        <div>
          <h1 className="text-center">Portfolio</h1>
          <Listing header={"Nucamp Projects"} projects={PROJECTS1} />
          <Listing header={"Riverdale Global Projects"} projects={PROJECTS2} />
          <Listing header={"DCCC Project"} projects={PROJECTS3} />
          <hr />
          <About />
        </div>

      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
