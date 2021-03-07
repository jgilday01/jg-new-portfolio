import { PROJECTS } from '../shared/projects';

function Listing() {

    const projects = PROJECTS;

    return (
        <div className="row p-4">
            <h1>PROJECTS</h1>
            {projects.map(project => (
                <div className="col-12 col-md-6 col-xl-4 my-3" key={project.id}>
                    <div className="card text-center p-3">
                        <h2>{project.name}</h2>
                        <img src={project.src} alt={project.alt} />
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Listing;