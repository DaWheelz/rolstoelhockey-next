import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import login_img from '../../public/img/login_icon.png';

export default function Header () {
    const [loggedIn] = useState();

    return (
      <Navbar bg="primary" expand="lg">
        <Container fluid>
            <Link href="/">
              <img src='img/navbar_logo_rolstoelhockeyV2.png' alt="" width={100} height={28} className="toolbar__logo"></img>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="/home">
            </Nav>
            <Nav>
            <Nav.Item style={{ margin: 10 }} as="li">
                <Link  href="/clubs">Clubs</Link>
              </Nav.Item>
              <Nav.Item style={{ margin: 10 }} as="li">
                <Link  href="/match">Uitslagen</Link>
              </Nav.Item>
              <Nav.Item style={{ margin: 10 }} as="li">
                <Link  href="/matchbyteam">Zoek wedstrijd</Link>
              </Nav.Item>
              <Nav.Item style={{ margin: 10 }} as="li">
                <Link  href="/competition">Competitie overzicht</Link>
              </Nav.Item>
              <Nav.Item style={{ margin: 10 }} as="li">
                <Link href="/contact">Contact</Link>
              </Nav.Item>
              <Nav.Item style={{ margin: 10 }} as="li">
                <Link href="/login">
                <img src='img/login_icon.png' alt="" width={25} height={25}></img>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>
    );
  };