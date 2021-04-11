
function Skills() {
    return (

        <div className="row">
            <div className="offset-1 col-10">

                <div className="row">
                    <h3 className="text-center w-100">Front End</h3>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_html.png'} className='img-fluid shadow' alt='html' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_css3.png'} className='img-fluid shadow' alt='css' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_js.png'} className='img-fluid shadow' alt='javascript' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_jquery.png'} className='img-fluid shadow' alt='jquery' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_bootstrap.png'} className='img-fluid shadow' alt='bootstrap' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_react.png'} className='img-fluid shadow' alt='react' />
                    </div>
                </div>

                <div className="row my-5">
                    <h3 className="text-center w-100">Back End</h3>
                    <div className="offset-1 col-5 offset-lg-2 col-lg-4 p-2 text-center">
                        <img src={'images/icons/skills_php.png'} className='img-fluid shadow' alt='php' />
                    </div>
                    <div className="col-5 col-lg-4 p-2 text-center">
                        <img src={'images/icons/skills_MySQL.png'} className='img-fluid shadow' alt='mysql' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;