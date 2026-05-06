import { BellFill, Search } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function HeaderNavbar() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-black">
      <Navbar.Brand className="me-0">
        <img
          src="/public/assets/netflix_logo.png"
          className="img-fluid"
          style={{ width: 100 }}
          alt="netflix-logo"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between ms-2 ms-lg-0"
      >
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/TvShows">
            Tv Shows
          </Link>
          <Link className="nav-link" to="#">
            Movies
          </Link>
          <Link className="nav-link" to="#">
            Recently Added
          </Link>
          <Link className="nav-link" to="#">
            My List
          </Link>
          <Link className="nav-link" to="/profile">
            PROFILE
          </Link>
          <Link className="nav-link" to="#">
            Settings
          </Link>
        </Nav>
        <Nav className="d-flex align-items-center flex-row gap-2">
          <Nav.Link href="#Search">
            <Search></Search>
          </Nav.Link>
          <Nav.Link href="#KIDS">KIDS</Nav.Link>
          <Nav.Link href="#BellFill">
            <BellFill></BellFill>
          </Nav.Link>
          <NavDropdown
            title={
              <img
                src="/public/assets/kids_icon.png"
                className="img-fluid"
                style={{ width: 40 }}
                alt="kids-icon"
              ></img>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Utente</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;
