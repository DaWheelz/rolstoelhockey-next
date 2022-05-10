import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import { width } from '@mui/system';

export default function Header () {

    return (
      <footer style={{gap: '1.25rem', alignItems: 'center', flexDirection: 'column', display: 'flex', backgroundColor: '#f7f7f7', boxShadow: 'rgb(39 39 39 / 10%) 0px 1px 15px 1px', border: '1px solid rgb(218, 218, 218)'}}>
        <div style={{justifyContent: 'center', display: 'flex'}}>
          <a style={{padding:20}} href="https://www.facebook.com/rolstoelhockey">Facebook</a>
          <a style={{padding:20}} href="https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?fbclid=IwAR0r_IPRFdGomX1k70Ol1bLXhbTHPOt2by2XGc6fiTBr9f5D4jvCYBjnFPg">iOS</a>
          <a style={{padding:20}} href="https://play.google.com/store/apps/details?id=rolstoel.hockey">Android</a>
          <a style={{padding:20}} href="mailto:rolstoelhockeyapp@gmail.com">Contact</a>
          <a style={{padding:20}} href="/policy">Privacybeleid</a>
        </div>
        <p >© 2022 Rolstoelhockey. All rights reserved.</p>
      </footer>
    );
  };