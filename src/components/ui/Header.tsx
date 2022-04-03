import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="bg-background px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0 h-20">
    <span className="text-dark text-xl">Baycungban</span>
    <div className="hidden lg:flex flex-grow">
      <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
        <li>
          <Link
            to="/"
            className="block text-gray-500 hover:text-gray-300 py-2 md:mx-4"
          >
            Promotion
          </Link>
        </li>
        <li>
          <Link
            to="/list"
            className="block text-gray-500 hover:text-gray-300 py-2 md:mx-4"
          >
            Flight Schedule
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block text-gray-500 hover:text-gray-300 py-2 md:mx-4"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block text-gray-500 hover:text-gray-300 py-2 md:mx-4"
          >
            Payment Guide
          </Link>
        </li>
      </ul>
      <div className="flex my-3 lg:my-0">
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded border border-solid border-purple-700 hover:border-purple-800">
          Booking now
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Header