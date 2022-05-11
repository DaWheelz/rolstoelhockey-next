export default function Footer () {

    return (
      <footer className="p-4 bg-slate-700 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700">
      <span className="text-sm text-white sm:text-center">© 2022 <a href="https://rolstoelhockey.app" className="hover:underline text-white">Rolstoelhockey™</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
          <li>
              <a href="https://www.facebook.com/rolstoelhockey" className="mr-4 hover:underline md:mr-6 text-white">Facebook</a>
          </li>
          <li>
              <a href="https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?fbclid=IwAR0r_IPRFdGomX1k70Ol1bLXhbTHPOt2by2XGc6fiTBr9f5D4jvCYBjnFPg" className="mr-4 hover:underline md:mr-6 text-white">iOS</a>
          </li>
          <li>
              <a href="https://play.google.com/store/apps/details?id=rolstoel.hockey" className="mr-4 hover:underline md:mr-6 text-white">Android</a>
          </li>
          <li>
              <a href="/policy" className="mr-4 hover:underline md:mr-6 text-white">Privacybeleid</a>
          </li>
          <li>
              <a href="mailto:rolstoelhockeyapp@gmail.com" className="hover:underline text-white">Contact</a>
          </li>
      </ul>
  </footer>
    );
  };