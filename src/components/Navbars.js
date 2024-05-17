import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanva from "./Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbars.css"

export default function Navbar_component() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Gunn'Treepaech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="navbarItem">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="navbarItem">
                About Me
                </Link>
              </Nav.Link>
              <Nav.Link className="navbarItem" onClick={handleShowOffcanvas}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanva show={showOffcanvas} handleClose={handleCloseOffcanvas} />
    </>
  );
}
