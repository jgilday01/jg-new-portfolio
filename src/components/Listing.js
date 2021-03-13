import Flippy, { FrontSide, BackSide } from 'react-flippy'

function Listing({ header, projects} ) {

    return (
        <div className="row">
            <div className="col-12 offset-sm-1 col-sm-10">
                <div className="row">

                    <h1 className="text-center">{header}</h1>

                    <div className={`${projects.length === 2 ? "col-lg-hidden col-xl-2" : ""}`}></div>

                    {projects.map(project => (
                        <div key={project.id} className="col-12 col-md-6 col-xl-4 my-3">
                            <Flippy flipOnClick={true} className="mx-auto">
                                <FrontSide>
                                    <div>
                                        <div className="card text-center p-1">
                                            <h4>{project.name}</h4>
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
                                            project.link ?
                                                <a href={project.link} rel="noreferrer" target='_blank' className='btn btn-primary btn-sm mx-auto w-75 my-2'>View the site</a> :
                                                <a href={project.link2} rel="noreferrer" target='_blank' className='btn btn-primary btn-sm mx-auto w-75 my-2'>See my code</a>
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