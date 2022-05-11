export default function Footer () {

    return (
      <footer className="p-2 bg-gray-100 md:flex md:items-center md:justify-between md:p-2 border-t-2">
      <span className="text-sm sm:text-center">© 2022 <a href="https://rolstoelhockey.app" className="hover:underline">Rolstoelhockey™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
          <li>
              <a href="https://www.facebook.com/rolstoelhockey" className="mr-4 hover:underline md:mr-6">Facebook</a>
          </li>
          <li>
              <a href="https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?fbclid=IwAR0r_IPRFdGomX1k70Ol1bLXhbTHPOt2by2XGc6fiTBr9f5D4jvCYBjnFPg" className="mr-4 hover:underline md:mr-6">iOS</a>
          </li>
          <li>
              <a href="https://play.google.com/store/apps/details?id=rolstoel.hockey" className="mr-4 hover:underline md:mr-6">Android</a>
          </li>
          <li>
              <a href="/policy" className="mr-4 hover:underline md:mr-6">Privacybeleid</a>
          </li>
          <li>
              <a href="mailto:rolstoelhockeyapp@gmail.com" className="hover:underline">Contact</a>
          </li>
      </ul>
  </footer>
    );
  };