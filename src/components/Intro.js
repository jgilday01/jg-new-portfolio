import ScrollAnimation from 'react-animate-on-scroll';

function Intro() {
    return (
        <div className="align-self-center mx-3 mx-md-5 my-4 p-5 header-wrapper header-text">
            <ScrollAnimation animateIn='fadeIn' delay={1000} duration={5} animateOnce={true}>
                <div className="display-3">
                    Hello, I'm <strong>John Gilday</strong>
                </div>
                <div className="display-6">
                    An enthusiastic software developer with over 7 years of experience,
                    an excellent team player, an effective communicator, a problem solver,
                    a lifelong learner who is fueled by a passion for creativity and collaboration.
                </div>
            </ScrollAnimation>
        </div>
    )

}

export default Intro;