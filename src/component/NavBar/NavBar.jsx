import { useState, useEffect } from "react";
import { Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";
import logo from "../../images/logo.svg";

const NavBar = () => {
  const [themeLogo,setThemeLogo] = useState(<RiMoonClearFill/>);


  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <img
          className="d-inline-block align-top"
          alt="React Logo"
          src={logo}
          width="45"
          height="45"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="h5">
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
            >
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
            >
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
        <Form className="d-flex w-100 justify-content-end">
          <Form.Check
            id="custom-switch"
            className="text-white"
            type="switch"
            label={themeLogo}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
