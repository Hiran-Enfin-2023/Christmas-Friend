import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import "./Header.css"
function Header() {
  return (
    <div className="header-main">
      <Navbar id="navbar" expand="lg">
        <Container id="container">
          <Navbar.Brand className="navbar-brand" >
            <img id="logo" src={Logo} alt="" />
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="navbar-nav" className="me-auto">
              {/* <Nav.Link   id="link" >Home</Nav.Link>
              <Nav.Link  id="link" >Wish</Nav.Link>
              <Nav.Link   id="link" >Christmas Friend</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Header;
