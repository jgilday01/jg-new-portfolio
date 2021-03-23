import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './components/About';
import Listing from './components/Listing'
import Navigate from './components/Navigate'
import Skills from './components/Skills'

import { PROJECTS1 } from './shared/projects1'
import { PROJECTS2 } from './shared/projects2'
import { PROJECTS3 } from './shared/projects3'

import ScrollAnimation from 'react-animate-on-scroll';

ReactDOM.render(
  <React.StrictMode>
    <div id="full-page">
      <div className="container-fluid">

        <div className="row">
          <header className="d-flex justify-content-center">
            <div className="align-self-center w-75 mx-auto my-2 p-4 header-wrapper">
              <ScrollAnimation animateIn='fadeIn' delay={1000} duration={5} animateOnce={true}>

                <div className="display-2">
                  Hello, I'm <strong>John Gilday</strong>
                </div>
                <div className="display-6">
                  A passionate software developer who is team oriented with excellent communication skills
                  and driven by creativity and collaboration.
                </div>
              </ScrollAnimation>
            </div>

          </header>
        </div>

        <Navigate />

        <div className="row">
          <div className="p-3 project-details">
            <h1 className="text-center my-3" id="Projects">PORTFOLIO</h1>
            <Listing header={"Nucamp Bootcamp"} projects={PROJECTS1} />
            <Listing header={"Riverdale Global"} projects={PROJECTS2} />
            <Listing header={"DCCC"} projects={PROJECTS3} />
          </div>
        </div>

        <div className="row">
          <div id="About" className="about-details p-3">
            <h1 className="text-center my-3">ABOUT ME</h1>
            <About />
          </div>
        </div>

        <div className="row">
          <div id="Skills" className="p-3" style={{ background: 'rgb(33,44,55)' }}>
            <h1 className="text-center my-3">SKILLS</h1>
            <Skills />
          </div>
        </div>

      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
