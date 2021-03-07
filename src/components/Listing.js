//import foods from "../shared/list";

function Listing() {

    const projects = [
        { id: 1, name: 'project1' },
        { id: 2, name: 'project2' }
    ];


    return (
        <div className="row p-4">
            <div className="card text-dark">
                {projects.map(project => (
                    <div key={project.id}>{project.name}</div>
                ))}
            </div>
        </div>
    );

}

export default Listing;