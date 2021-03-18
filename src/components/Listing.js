import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Listing({ header, projects }) {

    return (
        <div className="row">
            <div className="col-12 offset-sm-1 col-sm-10">
                <div className="row mb-3">

                    <h2 className="text-center m-0">{header}</h2>

                    <div className={`${projects.length === 1 ? "col-md-hidden col-md-3" : ""}`}></div>

                    {projects.map(project => (
                        <div key={project.id} className="col-12 col-md-6 my-3">
                            <Flippy flipOnClick={true} className="mx-auto">
                                <FrontSide>
                                    <div>
                                        <div className="card text-center p-1">
                                            <h5>{project.name}</h5>
                                            <img className='img-fluid' src={project.src} alt={project.alt} />
                                        </div>
                                    </div>
                                </FrontSide>
                                <BackSide>
                                    <div className="card text-center text-light bg-dark p-1 h-100">
                                        <h4 className="bg-secondary">{project.name}</h4>
                                        <div className="h-75 d-flex mx-auto desc-box">
                                            <div className="offset-1 col-10 align-self-center">{project.desc}</div>
                                        </div>
                                        {
                                            project.github ?
                                                <div>
                                                    <a href={project.github}
                                                        rel="noreferrer"
                                                        target='_blank'
                                                        className='btn btn-primary btn-sm mx-auto col-6 m-2'>Github Code</a>
                                                </div>
                                                :
                                                <div>
                                                    <a href={project.link}
                                                        rel="noreferrer"
                                                        target='_blank'
                                                        className='btn btn-primary btn-sm col-6 m-2'>View the site</a>
                                                </div>

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