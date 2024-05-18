import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanva from "./Offcanvas";
import { useState } from "react";
import "./Navbars.css";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";

export default function Navbar_component() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <h3 className="HeadNavbar">Gunn'Treepaech</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link smooth to="home" className="nav-link">
                Home
              </Link>
              <Link smooth to="about" className="nav-link">
                About Me
              </Link>
              <Button className="contactButton" variant="primary" onClick={handleShowOffcanvas}>
                Contact Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanva show={showOffcanvas} handleClose={handleCloseOffcanvas} />
    </>
  );
}
