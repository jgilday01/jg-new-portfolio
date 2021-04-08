import ScrollAnimation from 'react-animate-on-scroll';

function Intro() {
    return (
        <div className="align-self-center mx-3 mx-md-5 my-2 p-4 header-wrapper">
            <ScrollAnimation animateIn='fadeIn' delay={1000} duration={5} animateOnce={true}>

                <div className="display-2">
                    Hello, I'm <strong>John Gilday</strong>
                </div>
                <div className="display-6">
                    A passionate software developer who is team oriented
                    and driven by creativity and collaboration.
                </div>
            </ScrollAnimation>
        </div>
    )

}

export default Intro;