import ScrollAnimation from 'react-animate-on-scroll';
import { FilePost } from 'react-bootstrap-icons';
import { FaLinkedin } from 'react-icons/fa'


function About() {
  return (
    <div className="row">
      <div className="offset-1 col-10">

        <div className="row">

          <div className="col-12 col-lg-4">
            <p>
              I feel there is something special and very satisfying about taking a concept and then turning it into a reality.
            </p>
            <p>
              In 2015 I completed a Web Development Certification
              at Delaware County Commuinty College learning web fundamentals like HTML, CSS, PHP and Bootstrap.
              I started working in Web Development and as a Software Developer in May of 2016.
              In 2020 I completed the Front End and Mobile Development Certification at Nucamp working with REACT and REACT NATIVE.
            </p>
          </div>

          <div className="col-12 col-lg-4 pb-4">
            <ScrollAnimation animateIn='flipInX' animateOnce={true}>
              <div className="profile-img-wrap mx-auto my-3 d-block">
                <img src={'images/profile-pic.jpg'} className='profile-img rounded-circle img-fluid shadow' alt='headshot' />
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-12 col-lg-4">
            <p>
              I have worked in Information Technology since 2007.
              Working in Web Development has been my favorite part of working in IT.
              Programming has allowed me to apply creative skills which I truly enjoy.
            </p>
            <p>
              I also have combined my interests in art, music and gaming by working in Unity 3d doing their tutorials and eventually building my own games. This gave me a chance to incorporate sound, music, graphics and also some coding logic.
            </p>
          </div>

        </div>

        <div className="row">
          <div className="col-12 text-center mt-3">
            <a href="doc/John_Gilday_Resume.pdf"
              target="_blank"
              className="btn btn-dark mx-auto"
              style={{ width: '200px' }}
            >
              <span>
                <FilePost />&nbsp;Resume
              </span>
            </a>
          </div>
          <div className="col-12 text-center mt-3">

            <a href="https://www.linkedin.com/in/johngilday/"
              target="_blank"
              className="btn btn-dark mx-auto"
              style={{ width: '200px' }}
            >
              <span>
                <FaLinkedin />&nbsp;LinkedIn
              </span>
            </a>
          </div>
        </div>

      </div>
    </div >
  );
}

export default About;
