import React from "react";
import { FaDownload } from "react-icons/fa";
import { useLocation } from "react-router";

import { Link } from "react-scroll";

const Navbar = () => {
  const tab = (
    <>
      {/* Banner */}
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          // hashSpy={true}
          activeClass="text-red-500 font-bold"
        >
          Home
        </Link>
      </li>
      {/* About Me */}
      <li>
        <Link
          to="about-me"
          smooth={true}
          duration={500}
          spy={true}
          // hashSpy={true}
          activeClass="text-red-500 font-bold"
        >
          About Me
        </Link>
      </li>
      {/* Education */}
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          // hashSpy={true}
          activeClass="text-red-500 font-bold"
        >
          Education
        </Link>
      </li>
      {/* Skills */}
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          // hashSpy={true}
          activeClass="text-red-500 font-bold"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          activeClass="text-red-500"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          activeClass="text-red-500"
        >
          Contact & Social links
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-2xl fixed mx-auto  left-0 z-50 ">
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
            {tab}
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
