import { Link } from "react-scroll";
import "./NavbarScroll.css";
import { useState } from "react";
import Offcanva from "./Offcanvas";

function NavbarScroll() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact" onClick={handleShowOffcanvas}>
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Offcanva show={showOffcanvas} handleClose={handleCloseOffcanvas} />
    </>
  );
}
export default NavbarScroll;
