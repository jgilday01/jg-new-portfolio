import Flippy, { FrontSide, BackSide } from 'react-flippy'
import ScrollAnimation from 'react-animate-on-scroll';

function Listing({ header, projects }) {

    return (
        <div className="row">
            <div className="col-12 offset-sm-1 col-sm-10 offset-xl-2 col-xl-8 p-3">
                <div className="row mb-3">

                    <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                        <h2 className="text-center m-0">{header}</h2>
                    </ScrollAnimation>

                    <div className={`${projects.length === 1 ? "col-md-hidden col-lg-3" : ""}`}></div>

                    {projects.map(project => (
                        <div key={project.id} className="col-12 col-lg-6 my-3 my-xl-5">
                            <ScrollAnimation animateIn='zoomIn' animateOnce={true}>
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
                                        <div className="card text-center text-light h-100">
                                            <h4 className="bg-secondary p-2">{project.name}</h4>
                                            <div className="h-75 d-flex mx-auto desc-box">
                                                <div className='align-self-center p-2 p-md-3'>{project.desc}</div>
                                            </div>
                                            {
                                                project.github ?
                                                    <div className='my-auto'>
                                                        <a href={project.github}
                                                            rel="noreferrer"
                                                            target='_blank'
                                                            className='btn btn-primary btn-sm mx-auto col-6 m-2'>Github Code</a>
                                                    </div>
                                                    :
                                                    <div className='my-auto'>
                                                        <a href={project.link}
                                                            rel="noreferrer"
                                                            target='_blank'
                                                            className='btn btn-primary btn-sm col-6 m-2'>View the site</a>
                                                    </div>

                                            }
                                        </div>
                                    </BackSide>
                                </Flippy>
                            </ScrollAnimation>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );

}

export default Listing;