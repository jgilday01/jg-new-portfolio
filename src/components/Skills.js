
function Skills() {
    return (

        <div className="row">
            <div className="offset-1 col-10">

                <div className="row my-3">
                    <h3 className="text-center w-100 mb-3">= Front End =</h3>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_html.png'} className='img-fluid shadow img-fo' alt='html' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_css3.png'} className='img-fluid shadow img-fo' alt='css' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_js.png'} className='img-fluid shadow img-fo' alt='javascript' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_jquery.png'} className='img-fluid shadow img-fo' alt='jquery' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_bootstrap.png'} className='img-fluid shadow img-fo' alt='bootstrap' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_react.png'} className='img-fluid shadow img-fo' alt='react' />
                    </div>
                </div>

                <div className="row mt-5">
                    <h3 className="text-center w-100">= Back End =</h3>
                    <div className="offset-2 col-4 offset-lg-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_php.png'} className='img-fluid shadow img-be' alt='php' />
                    </div>
                    <div className="col-4 col-lg-2 p-2 text-center">
                        <img src={'images/icons/skills_MySQL.png'} className='img-fluid shadow img-be' alt='mysql' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;