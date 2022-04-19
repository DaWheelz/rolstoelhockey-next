import Link from 'next/link';
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function Header () {
    const [loggedIn] = useState();
    // const [collapsed, setCollapsed] = useState(false);
    // const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show d-flex justify-content-end';
    // const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed ' : 'navbar-toggler navbar-toggler-right ';

    return (
      <Navbar bg="primary" expand="lg">
        <Container fluid>
            <Link href="/">
              <img src='img/navbar_logo_rolstoelhockey.png' alt="" width={100} height={28} className="toolbar__logo"></img>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="/home">
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Item as="li">
                <Link className="nav-item" href="/clubs">Clubs</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-item" href="/match">Uitslagen</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-item" href="/matchbyteam">Zoek wedstrijd</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-item" href="/competition">Competitie overzicht</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-item" href="/contact">Contact</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-item" href="/login">Login</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>
    );
  };