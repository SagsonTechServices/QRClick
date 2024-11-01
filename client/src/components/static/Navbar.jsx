import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-primary-content z-20 fixed top-0 left-0 container max-w-screen-2xl lg:px-20 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-primary hover:font-bold duration-500">
              <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:text-primary hover:font-bold duration-500">
              <Link to={'contact'}>Contact us</Link>
            </li>
            <li className="hover:text-primary hover:font-bold duration-500">
              <Link to={'/about'}>About us</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl hover:text-primary hover:font-bold duration-500">
          QRClick
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li className="hover:text-primary hover:font-bold duration-500">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="hover:text-primary hover:font-bold duration-500">
            <Link to={'/contact'}>Contact us</Link>
          </li>
          <li className="hover:text-primary hover:font-bold duration-500">
            <Link to={'/about'}>About us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/support'} className="btn btn-primary">Support us</Link>
      </div>
    </div>
  );
}

export default Navbar;
