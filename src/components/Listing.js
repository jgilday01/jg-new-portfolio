import { PROJECTS } from '../shared/projects';

import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Listing() {

    const projects = PROJECTS;

    return (
        <div className="row p-4">
            <div className="col-12 offset-sm-1 col-sm-10">
                <div className="row">

                    <h1 className="text-center">PROJECTS</h1>

                    {projects.map(project => (
                        <div key={project.id} className="col-12 col-md-6 col-xl-4 my-3">
                            <Flippy flipOnHover={true} className="mx-auto">
                                <FrontSide>
                                    <div>
                                        <div className="card text-center p-1">
                                            <h3>{project.name}</h3>
                                            <img className='img-fluid' src={project.src} alt={project.alt} />
                                        </div>
                                    </div>
                                </FrontSide>
                                <BackSide>
                                    <div className="card text-center text-light bg-dark p-1 h-100">
                                        <h3 className="bg-secondary">{project.name}</h3>
                                        <div class="h-75 d-flex">
                                            <div className="offset-1 col-10 p-1 align-self-center">{project.desc}</div>
                                        </div>
                                        {
                                            project.link ? <a href={project.link} rel="noreferrer" target='_blank' className='btn btn-primary mx-auto w-50 my-2'>View the site</a> : ""
                                        }
                                    </div>
                                </BackSide>
                            </Flippy>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );

}

export default Listing;