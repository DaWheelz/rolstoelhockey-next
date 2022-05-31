import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gradient-to-r from-orange-600 to-orange-500 p-3">
        <Link href="/overview">
        <Image src='/img/navbar_logo_rolstoelhockey.png' alt="rolstoelhockey_logo" layout="responsive" quality={100} width={100} height={28} className="toolbar__logo" />
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-orange-500 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/overview">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white ">
                Overzicht
              </a>
            </Link>
            <Link href="/nieuws">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white ">
                Nieuws
              </a>
            </Link>
            <Link href="/clubs">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white ">
                Clubs
              </a>
            </Link>
            <Link href="/match">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white">
                Uitslagen
              </a>
            </Link>
            <Link href="/matchbyteam">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white">
              Zoek wedstrijd
              </a>
            </Link>
            <Link href="/competition">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:bg-orange-500 hover:text-white">
              Competitie overzicht
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};