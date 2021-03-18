import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Listing from './components/Listing'
import Navigate from './components/Navigate'

import { PROJECTS1 } from './shared/projects1'
import { PROJECTS2 } from './shared/projects2'
import { PROJECTS3 } from './shared/projects3'

ReactDOM.render(
  <React.StrictMode>
    <div id="full-page">
      <div className="container-fluid">
        <div className="row">
          <header className="d-flex justify-content-center">
            <div className="align-self-center">
              <div className="display-2 w-75 mx-auto my-3">
                Hello, I'm <strong>John Gilday</strong>
              </div>
              <div className="display-6 w-75 mx-auto">
                A passionate software developer with more than 4 years of experience,
                team oriented, excellent communication skills, driven by creativity and collaboration.
            </div>
            </div>
          </header>
        </div>

        <Navigate />

        <h1 className="text-center my-3" id="Projects">PORTFOLIO</h1>
        <Listing header={"Nucamp Bootcamp"} projects={PROJECTS1} />
        <Listing header={"Riverdale Global"} projects={PROJECTS2} />
        <Listing header={"DCCC"} projects={PROJECTS3} />
        <div className="about-details p-4">
          <h1 className="text-center my-3" id="About">ABOUT ME</h1>
          <About />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
