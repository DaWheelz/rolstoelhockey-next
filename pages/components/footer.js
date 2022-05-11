import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import { width } from '@mui/system';

export default function Header () {

    return (
      <footer class="p-4 bg-slate-700 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700">
      <span class="text-sm text-white sm:text-center">© 2022 <a href="https://rolstoelhockey.app" class="hover:underline text-white">Rolstoelhockey™</a>. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
          <li>
              <a href="https://www.facebook.com/rolstoelhockey" class="mr-4 hover:underline md:mr-6 text-white">Facebook</a>
          </li>
          <li>
              <a href="https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?fbclid=IwAR0r_IPRFdGomX1k70Ol1bLXhbTHPOt2by2XGc6fiTBr9f5D4jvCYBjnFPg" class="mr-4 hover:underline md:mr-6 text-white">iOS</a>
          </li>
          <li>
              <a href="https://play.google.com/store/apps/details?id=rolstoel.hockey" class="mr-4 hover:underline md:mr-6 text-white">Android</a>
          </li>
          <li>
              <a href="/policy" class="mr-4 hover:underline md:mr-6 text-white">Privacybeleid</a>
          </li>
          <li>
              <a href="mailto:rolstoelhockeyapp@gmail.com" class="hover:underline text-white">Contact</a>
          </li>
      </ul>
  </footer>
    );
  };