import Header from './header';
import { Navbar } from './Navbar';
import Footer from './footer';
import "tailwindcss/tailwind.css";

export default function Layout({ children }) {

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}