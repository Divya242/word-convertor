import './common.css';
import NavBar from './NavBar';
import logo from "../../images/logo.svg";
import { Link } from "react-scroll";
import { FaChevronCircleDown,FaTwitter,FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <>
    <header><NavBar/></header>

    <div className="maincontent">
    <div className = "container text-center">
    <img
          className="logo spin img-fluid"
          alt="React Logo"
          src={logo}
          height="45%"
          width="45%"
        />
    </div>
      <div>
       <h2 className="skills">Divya Gupta</h2>
      </div>
      <hr />
      <div className="name">
        <h3>I am Software developer.</h3>
      </div>
      <div className="social-links">
          <a className="mr-5 githublink" href={""} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a className="githublink" href={""} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      <div>
        <Link className="scroll" to="skills" smooth={true} duration={750}>
           <FaChevronCircleDown id="scroll-down"/>
        </Link>
      </div>
    </div>

    </>
  )
}

export default About;
