import Particles from 'react-particles-js';

function ParticleBackground() {

    return (
        <Particles id="particles-js"
            params={{
                particles: {
                    number: {
                        value: 333,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: ['#A7F', '#6FDEFF', '#D73']
                    },
                    opacity: {
                        value: 0.75,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1.5
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 1.5
                    }
                }
            }}
        />
    )
}
    
export default ParticleBackground;