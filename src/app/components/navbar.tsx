
import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center text-white  mb-4 md:mb-0">
            <span className="ml-3 text-xl">Vocation Website</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#home"} className="mr-5 hover:text-cyan-400 text-white font-bold">Home</Link>
            <Link href={"#card"} className="mr-5 hover:text-cyan-400 text-white font-bold">Cards</Link>
            <Link href={"#rewards"} className="mr-5 hover:text-cyan-400 text-white font-bold">Rewards</Link>
            <Link href={"#clients"} className="mr-5 hover:text-cyan-400 text-white font-bold">Clients</Link>
            <Link href={"#contact"} className="mr-5 hover:text-cyan-400 text-white font-bold">Contact</Link>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar




