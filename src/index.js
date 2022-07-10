import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './components/Intro';
import About from './components/About';
import Listing from './components/Listing';
import Navigate from './components/Navigate';
import Skills from './components/Skills';
import Scrolling from './components/Scrolling';

import { PROJECTS1 } from './shared/projects1';
import { PROJECTS2 } from './shared/projects2';
import { PROJECTS3 } from './shared/projects3';
import { PROJECTS4 } from './shared/projects4';

import Particles from 'react-particles-js';

ReactDOM.render(
  <React.StrictMode>
    <div id="full-page">
      <div className="container-fluid">

        <div className="row">
          <header id='Intro' className="d-flex justify-content-center header-img"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/header/sergey-zolkin-keyboard.jpg'})` /* photo by sergey-zolkin */ }}>
            <Intro />
          </header>
        </div>

        <Navigate />

        <div className="row">
          <div id="Projects" className="p-3 project-details">
            <h1 className="text-center my-3" >PORTFOLIO</h1>
            <Listing header={"Nucamp Bootcamp"} projects={PROJECTS1} />
            <Listing header={"Riverdale Global"} projects={PROJECTS2} />
            <Listing header={"DCCC"} projects={PROJECTS3} />
            <Listing header={"Games"} projects={PROJECTS4} />
          </div>
        </div>

        <div className="row">
          <div id="About" className="about-details p-3">
            <h1 className="text-center my-3">ABOUT ME</h1>
            <About />
          </div>
        </div>

        <div className="row" style={{ position: 'relative' }}>
          <div id="Skills" className="p-3">
            <h1 className="text-center my-3">SKILLS</h1>
            <Skills />
          </div>

          <Particles id="particles-js"
            params={{
              particles: {
                number: {
                  value: 333,
                  density: {
                    enable: true,
                    value_area: 1111
                  }
                },
                color: {
                  value: ['#A7F', '#6FDEFF', '#D73']
                },
                opacity: {
                  value: 0.65,
                  anim: {
                    enable: true
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1.5
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  speed: 1
                }
              }
            }}
          />

        </div>

        <div className="row">
          <div className="text-center p-2 mt-3 bg-dark">
            <p className="my-2">Created using React &amp; Bootstrap 5</p>
            <p className="my-2">John Gilday &copy; 2021</p>
          </div>
        </div>

        <Scrolling />

      </div>
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);
