import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Navbarr() {
  const [isActive,setIsactive]=useState({
    add:false,
    view:false,
    home:false
  });
  const handleClick=(navItem)=>{
   setIsactive({
    add:false,
    view: false,
    home: false,
    [navItem]: true
   })
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={isActive.add ? "text-success" : "text-dark"}
              as={NavLink}
              to="/add"
              onClick={()=>handleClick("add")}
            >
              ADD
            </Nav.Link>
            <Nav.Link
              className={isActive.view ? "text-success" : "text-dark"}
              as={NavLink}
              to="/view"
              onClick={()=>handleClick("view")}
            >
              VIEW
            </Nav.Link>
            <Nav.Link
              className={isActive.home ? "text-success" : "text-dark"}
              as={NavLink}
              to="/"
              onClick={()=>handleClick("home")}
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
