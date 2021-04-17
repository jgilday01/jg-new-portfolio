import React, { useState } from 'react';

function Navigate(props) {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="row  sticky-top ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <button className="custom-toggler navbar-toggler mx-auto btn-small"
                        type="button" data-toggle="collapse" data-target="#navbars-toggle"
                        aria-controls="navbars-toggle" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"
                        onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse my-3`} id="navbars-toggle">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#Intro">INTRO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projects">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Skills">SKILLS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigate;
