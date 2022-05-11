import Navbar from './Navbar';
import Footer from './footer';
import "tailwindcss/tailwind.css";

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}