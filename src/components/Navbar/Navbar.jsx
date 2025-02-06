import React from "react";
import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const tab = (
    <>
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      <li>
        <NavLink to="about-me">About Me</NavLink>
      </li>
      <li>
        <NavLink>Education</NavLink>
      </li>
      <li>
        <NavLink>Skills</NavLink>
      </li>
      <li>
        <NavLink>Projects</NavLink>
      </li>
      <li>
        <NavLink>Contact & Social links</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-2xl fixed mx-auto  left-0  ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <p className="text-2xl font-bold">
          <span className="text-orange-500">{"<Faisal Hasan"}</span>
          {" Emon/>"}
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{tab}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn  flex justify-center items-center gap-2">
          Download CV <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
