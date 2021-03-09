import { PROJECTS } from '../shared/projects';

import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Listing() {

    const projects = PROJECTS;

    return (
        <div className="row p-4">
            <h1 className="text-center">PROJECTS</h1>
            {projects.map(project => (
                <div key={project.id} className="col-10 col-md-6 col-xl-4 my-3">
                    <Flippy flipOnHover={true}>
                        <FrontSide>
                            <div>
                                <div className="card text-center p-3">
                                    <h2>{project.name}</h2>
                                    <img className='img-fluid' src={project.src} alt={project.alt} />
                                </div>
                            </div>
                        </FrontSide>
                        <BackSide>
                            <div className="card text-center text-light bg-secondary p-3 h-100">
                                <h2>{project.name}</h2>
                                <div>{project.desc}</div>
                            </div>
                        </BackSide>
                    </Flippy>
                </div>
            ))}
        </div>
    );

}

export default Listing;