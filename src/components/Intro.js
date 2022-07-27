import ScrollAnimation from 'react-animate-on-scroll';

function Intro() {
    return (
        <div className="align-self-center mx-3 mx-md-5 my-2 p-4 header-wrapper header-text">
            <ScrollAnimation animateIn='fadeIn' delay={1000} duration={5} animateOnce={true}>
                <div className="display-1">
                    Hello, I'm <strong>John Gilday</strong>
                </div>
                <div className="display-5">
                    A software developer with 6+ years experience in development and a passion for creativity and collaboration.
                </div>
            </ScrollAnimation>
        </div>
    )

}

export default Intro;