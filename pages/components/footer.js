import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import { width } from '@mui/system';

export default function Header () {

    return (
      <footer className='footer' style={{gap: '1.25rem', alignItems: 'center', flexDirection: 'column', display: 'flex', backgroundColor: '#292929', flexGrow: 1}}>
        <div style={{justifyContent: 'center', display: 'flex'}}>
          <a style={{padding:20}} href="https://www.facebook.com/rolstoelhockey">Facebook</a>
          <a style={{padding:20}} href="https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?fbclid=IwAR0r_IPRFdGomX1k70Ol1bLXhbTHPOt2by2XGc6fiTBr9f5D4jvCYBjnFPg">iOS</a>
          <a style={{padding:20}} href="https://play.google.com/store/apps/details?id=rolstoel.hockey">Android</a>
          <a style={{padding:20}} href="mailto:rolstoelhockeyapp@gmail.com">Contact</a>
          <a style={{padding:20}} href="/policy">Privacybeleid</a>
        </div>
        <p style={{color:'white'}}>© 2022 Rolstoelhockey. All rights reserved.</p>
      </footer>
    );
  };