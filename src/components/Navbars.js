import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanva from "./Offcanvas";
import { useState } from "react";
import "./Navbars.css";
import Button from "react-bootstrap/Button";

export default function Navbar_component({ homeRef, aboutRef, infoRef }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="Navbar bg-body-tertiary"
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
              <Nav.Link onClick={() => scrollToSection(homeRef)}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(infoRef)}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>
                Experiences
              </Nav.Link>
              <Button
                className="contactButton"
                variant="primary"
                onClick={handleShowOffcanvas}
              >
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
