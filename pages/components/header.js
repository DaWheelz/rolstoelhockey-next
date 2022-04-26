import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import login_img from '../../public/img/login_icon.png';
import GlobalStyle from './styled_components';

export default function Header () {
    const [loggedIn] = useState();

    return (
      <Navbar bg="primary" expand="lg">
        <GlobalStyle />
        <Container fluid>
            <Link href="/">
              <img src='img/navbar_logo_rolstoelhockeyV2.png' alt="" width={100} height={28} className="toolbar__logo"></img>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="/home">
            </Nav>
            <Nav className="ml-auto" id="myNavItem">
            <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link  href="/clubs">Clubs</Link>
              </NavItem>
              <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link  href="/match">Uitslagen</Link>
              </NavItem>
              <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link  href="/matchbyteam">Zoek wedstrijd</Link>
              </NavItem>
              <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link  href="/competition">Competitie overzicht</Link>
              </NavItem>
              <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link href="/contact">Contact</Link>
              </NavItem>
              <NavItem style={{ margin: 10 }} id="myNavItem" as="li">
                <Link href="/login">
                <img src='img/login_icon.png' alt="" width={25} height={25}></img>
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
  </Navbar>
    );
  };