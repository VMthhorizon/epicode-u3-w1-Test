import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="me-0">
          <img
            src="/public/assets/netflix_logo.png"
            className="img-fluid"
            style={{ width: 100 }}
            alt="netflix-logo"
          ></img>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
