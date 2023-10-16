import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Navbarr() {
  const isActive = true; // Placeholder value, replace it with your logic.

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={isActive ? "text-success" : "text-dark"}
              as={NavLink}
              to="/add"
            >
              ADD
            </Nav.Link>
            <Nav.Link
              className={isActive ? "text-success" : "text-dark"}
              as={NavLink}
              to="/view"
            >
              VIEW
            </Nav.Link>
            <Nav.Link
              className={isActive ? "text-success" : "text-dark"}
              as={NavLink}
              to="/"
            >
              HOME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
